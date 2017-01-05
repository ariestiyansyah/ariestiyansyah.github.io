SKOR Developer Documentation
==============

### Create Organization and Superuse


Hi, first import the two objects

`from profiles.models import CustomUser, Organization `

Then try creating one 

`Organization.objects.create()`

It will show errors about required fields that u haven't provided. Provide all required fields then try again.


If you do `Organization??` then hit enter u will see all fields in the organization.
Required fields are name, slug, domain,timezone and country.


```
org = Organization(name="MyTest", slug="my-test", country="ID", timezone="Asia/Jakarta", domain="test.com")
org.full_clean()
org.save()
```


for user you can do same thing. required fields are email and organization 

`user = CustomUser(email="test@test.com", organization=org)`




