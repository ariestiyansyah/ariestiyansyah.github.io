$(function() {

    CSV.DETECT_TYPES = false;

    var
        STORAGE_KEY = 'ariestiyansyah/mandrill',
        STORAGE_TTL = 52 * 7 * 24 * 60 * 60 * 1000, // 1 year
        dispatcher = $('<i/>'),
        editors = {
			'editorCSV': null,
			'editorHTML': null
		},
        rows = [],
        data = [],

		persistTimeout,

		defaultCSV = ''
            + 'EMAIL,NAME,AMOUNT,CONFIRMATION\n'
            + 'josh@example.com,Josh,180 Million,1234567890\n'
            + 'jen@example.com,Jen,150000,0987654321',

        defaultHTML = ''
            +'<html>\n'
            +'<head>\n'
            +'\t<style>\n'
            +'\t\tbody {\n'
            +'\t\t\tfont-family: Arial;\n'
            +'\t\t\tfont-size: 14px;\n'
            +'\t\t}\n'
            +'\t\t.red {\n'
            +'\t\t\tcolor: red;\n'
            +'\t\t}\n'
            +'\t\t.text-center {\n'
            +'\t\t\ttext-align: center;\n'
            +'\t\t}\n'
            +'\t</style>\n'
            +'</head>\n'
            +'<body>\n'
            +'\t<h2>Hello there {{NAME}}</h2>\n'
            +'\t<p>\n'
            +'\t\tGood news, a long distant relative of yours, in <strong>Nigeria</strong>, have left you <span class="red">{{AMOUNT}}</span> USD.\n'
            +'\t</p>\n'
            +'\t<p>\n'
            +'\t\tThis is your confirmation number: <strong>{{CONFIRMATION}}</strong> Please send me your info so I can make the transfer.\n'
            +'\t</p>\n'
            +'\t<p>\n'
            +'\t\tYours truly, <br /> A Nigerian Prince\n'
            +'\t</p>\n'
            +'\t<img src="https://i.imgur.com/WqMNyOD.png"/>\n'
            +'</body>\n'
            +'</html>\n'
        ,
        appEl = $('.mbo-app'),
        formEl = $('.mbo-form'),
        jumbotronEl = $('.jumbotron'),

        getStorage = function() {
            if (window.localStorage) {
                var config = localStorage.getItem(STORAGE_KEY + '-config'),
                    ttl = localStorage.getItem(STORAGE_KEY + '-ttl'),
                    expired = !ttl || isNaN(ttl) || ttl < (new Date()).getTime();

                if (!expired && (function() { try {config = JSON.parse(config); return true; } catch(e) { return false; } })() ) {
                    return config;
                }
            }
        },

        setStorage = function(config) {
            if(window.localStorage) {
                localStorage.setItem(STORAGE_KEY + '-config', JSON.stringify(config));
                localStorage.setItem(STORAGE_KEY + '-ttl', new Date().getTime() + STORAGE_TTL);
            }
        },

        whichIsFalsy = function(arr) {
            for (var i = 0; i < arr.length; i++) {
                if (!arr[i])
                    return i;
            }
            return null;
        },

        action = function(e) {
            var btn = $(e.target),
                action = btn.attr('data-action');

			throttledPersist();
            return actions[action](e);
        },

        preview = function(e) {
            var html = '',
                iframe = $('<iframe/>');

            try {
                template = Handlebars.compile(editors.editorHTML.getSession().getValue());
                html = template(data[0]);
                $('div.preview').empty().append(iframe);
                iframe[0].contentWindow.document.open();
                iframe[0].contentWindow.document.write(html);
                iframe[0].contentWindow.document.close();
                dispatcher.trigger('html:update');

				throttledPersist();
            } catch (e) {
                console.warn(e);
            }
        },

        parseCSV = function() {
            try {
                rows = CSV.parse(editors.editorCSV.getSession().getValue());
                data = [];
                if (rows && Array.isArray(rows[0])) {
                    var keys = rows[0];
                    rows.shift();
                    rows.forEach(function(row, i) {
                        var _row = {};
                        row.forEach(function(columnValue, j) {
                            _row[keys[j]] = columnValue;
                        });
                        data.push(_row);
                    });
                    $('.csv-alert').removeClass('error').empty();
                    dispatcher.trigger('csv:update');

					throttledPersist();
				}
            } catch (e) {
                $('.csv-alert').addClass('error').html('CSV ERROR:' + e);
            }
        },

        actions = {
            csvToggle: function(e) {
                var value = $(e.target).val();
                $('.csvInput').addClass('hidden');
                $('#' + value).parents('.form-group').removeClass('hidden');
            },

            gtfo: function(e) {
                e.preventDefault();
                setTimeout(function(){
                    window.open('', '_self', '');
                    window.close();
                    window.location = "http://www.google.com";
                }, 0);
            },

            previous: function(e) {
                var pills = $('.nav-pills li');
                pills.each(function(i, li) {
                    li = $(li);
                    if (li.hasClass('active')) {
                        return li.prev().find('a').tab('show') === 'hummus';
                    }
                });
            },

            next: function(e) {
                var pills = $('.nav-pills li');
                pills.each(function(i, li) {
                    li = $(li);
                    if (li.hasClass('active')) {
                        return li.next().find('a').tab('show') === 'hummus';
                    }
                });
            },

            start: function(e) {
                jumbotronEl.addClass('hide');
                appEl.removeClass('hide');
                actions.clear();
            },

            reset: function(e) {
                jumbotronEl.removeClass('hide');
                appEl.addClass('hide');
                actions.clear();
            },

            clear: function(e) {
                formEl[0].reset();
            },

            blast: function(e) {
                e.preventDefault();

                var count = 0,
                    btn = $(e.target),
                    apiKey = $('#mandrillApiKey').val(),
                    subjectStr = $('#emailSubject').val(),
                    from_email = $('#emailFromAddress').val(),
                    from_name = $('#emailFromName').val(),
                    toEmailColumn = $('#emailToAddressColumn').val(),
                    toNameColumn = $('#emailToNameColumn').val(),
                    resultsEl = $('#blast-results');

                resultsEl.empty();

                if (apiKey && Array.isArray(data) && subjectStr && from_email && from_name && toEmailColumn) {
                    var deferreds = [],
                        md = new mandrill.Mandrill(apiKey, true);

                    btn.prop('disabled', true);
                    btn.text('Blasting now... hang tight');

                    data.forEach(function(row) {
                        var deferred = $.Deferred(),
                            html = template(row),
                            params = {
                                message: {
                                    html: html,
                                    text: $(html).wrap('<p/>').parent().text(),
                                    subject: Handlebars.compile(subjectStr)(row),
                                    from_email: from_email,
                                    from_name: from_name,
                                    to: [
                                        {email: row[toEmailColumn], name: row[toNameColumn] || ''}
                                    ],
                                    auto_text: true
                                },
                                async: true
                            },
                            success = function(response) {
                                resultsEl.prepend('<div class="alert success">' + JSON.stringify(response) + '</div>');
                                deferred.resolve();
                                var percentage = (++count/data.length*100).toFixed(1);
                                btn.text('Blasting now... hang tight (' + count + '/' + data.length + ' -- ' + percentage + '%)');
                            },
                            error = function(response) {
                                resultsEl.prepend('<div class="alert error">' + JSON.stringify(response) + '</div>');
                                deferred.reject();
                            };

                        deferreds.push(deferred);
                        md.messages.send(params, success, error);
                    });

                    $.when.apply($, deferreds).always(function() {

                        resultsEl.prepend( ''
                            + '<div class="alert info">'
                            + '<p>All Emails were queued up! Now track the delivery reports on your <a href="http://mandrill.com">mandrill.com</a> account.</p>'
							+ '<p>I intentionally reset the emails list so you don\'t accidentally resend but persisted your other info, which you can clear using the clear button on the right.</p>'
                            + '</div>');

                        btn.prop('disabled', false);

                        setTimeout(function() {
                            btn.text('Blast Now!');
                        }, 1000);
                    })
                } else {
                    var arr = ['Mandrill Api Key', 'Subject', 'From Email', 'From Name', 'To Email Column'],
                        falsy = arr[whichIsFalsy([apiKey, subjectStr, from_email, from_name, toEmailColumn])];

                    resultsEl.prepend('<div class="alert error">'
                        + (falsy ? falsy + ' is not set! ' :
                            !data.length ? ' No CSV rows detected! ' :
                                !template({}) ? ' No HTML template detected! ' :
                                    'Something went wrong :( -- file an issue <a href="https://github.com/akhoury/akhoury.github.io/issues" target="_blank">here</a>') + '</div>');
                }
                return false;
            },

			clearStorage: function() {
				localStorage.clear();
				location.reload(true);
			}
        },

        attachActions = function(){
            $('[data-action]').on('click', action);
            $('#editorHTML').on('paste keypress keyup keydown', preview);
            $('#editorCSV').on('paste keypress keyup keydown', parseCSV);
            dispatcher.on('csv:update', function(e) {
                $('#rows-count').text(data.length);
                preview();
            });
		},

		nodeValue = function(selector, value) {
			var getter, setter,
				tag = $(selector),
				tagName = tag.prop('tagName').toLowerCase();

				if ( (tagName === 'input' && tag.attr('type') !== 'file') || tagName === 'textarea') {
					getter = function() {
						return tag.val();
					};
					setter = function(value) {
						tag.val(value);
					};
				} else if (tag.hasClass('ace_editor')) {
					getter = function() {
						return editors[tag.attr('id')].getSession().getValue();
					};
					setter = function(value) {
						editors[tag.attr('id')].getSession().setValue(value);
					};
				} else {
					//todo add RADIO buttons support when I enable the client-site upload
					getter = function() {
						return tag.html();
					};
					setter = function(value) {
						tag.html(value);
					};
				}

			if (value !== undefined) {
				setter(value);
			}

			return getter();
		},

		persist = function() {
			var inputs = $('input, .ace_editor');
			var config = {};
			inputs.each(function(i, input) {
				var key = $(input).attr('id');
				var value = nodeValue(input);
				config[key] = value;
			});

			// dont store the emails
			delete config.editorCSV;

			setStorage(config);
		},

		throttledPersist = function(timeout) {
			clearTimeout(persistTimeout);

			persistTimeout = setTimeout(function() {
				persist();
			}, timeout || 1000);
		},

		init = function() {
			attachActions();
			editors.editorCSV = ace.edit('editorCSV');
			editors.editorHTML = ace.edit('editorHTML');
			editors.editorHTML.getSession().setMode('ace/mode/html');

			editors.editorHTML.getSession().setValue(defaultHTML);
			editors.editorCSV.getSession().setValue(defaultCSV);

			var storage = getStorage();
			if (storage) {

				if (storage.mandrillApiKey) {
					actions.start();
				}

				Object.keys(storage).forEach(function(id, value) {
					nodeValue('#' + id, storage[id]);
				});
			}

			parseCSV();
			preview();
		};

	init();
});
