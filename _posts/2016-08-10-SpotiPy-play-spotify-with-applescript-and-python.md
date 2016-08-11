---
title: SpotiPy - Control Spotify using AppleScript and Python
author: ariestiyansyah
layout: post
categories:
- Python
tags:
- AppleScript
- Python
- Django
- Ariestiyansyah
description: Control Spotify usng Terminal
---

This is part of my research using AppleScript and Python. 


    import cmd
    import os
    import subprocess
    from time import sleep
    
    Activate = """osascript -e 'tell application "Spotify" to activate'"""
    Start = """osascript -e 'tell application "Spotify" to play'"""
    Exit = """osascript -e 'tell application "Spotify" to quit'"""
    Next = """osascript -e 'tell application "Spotify" to next track'"""
    Previous = """osascript -e 'tell application "Spotify" to previous track'"""
    Pause = """osascript -e 'tell application "Spotify" to playpause'"""
    Play = """osascript -e 'tell application "Spotify" to playpause'"""
    Artist = """osascript -e 'tell application "Spotify" to artist of current track as string'"""
    Album = """osascript -e 'tell application "Spotify" to album of current track as string'"""
    Track = """osascript -e 'tell application "Spotify" to name of current track as string'"""
    
    class SpotiPy(cmd.Cmd,object):
        intro = 'Welcome to SpotifyCli for MacOS! Type help or ? to list commands.\n'
        prompt = 'SpotiPy> '

    def do_start(self, s):
        subprocess.call(Activate, shell=True)
        sleep(1)
        subprocess.call(Play, shell=True)
    def help_start(self):
        print "Enter start to activate Spotify Player"

    def do_exit(self, s):
        subprocess.call(Exit, shell=True)
    def help_exit(self):
        print "Enter exit to close Spotify"

    def do_pause(self, s):
        subprocess.call(Pause, shell=True)
    def help_pause(self):
        print "Enter pause to pause Spotify player"

    def do_play(self, s):
        subprocess.call(Play, shell=True)
    def help_play(self):
        print "Enter play to pause Spotify player"

    def do_next(self, s):
        subprocess.call(Next, shell=True)
        sleep(3)
        print "Track :"
        subprocess.call(Track, shell=True)
        print "Artist :"
        subprocess.call(Artist, shell=True)
        print "Album :"
        subprocess.call(Album, shell=True)
    def help_next(self):
        print "Enter next to play next track"

    def do_previous(self, s):
        subprocess.call(Previous, shell=True)
        sleep(3)
        print "Track :"
        subprocess.call(Track, shell=True)
        print "Artist :"
        subprocess.call(Artist, shell=True)
        print "Album :"
        subprocess.call(Album, shell=True)
    def help_previous(self):
        print "Enter previous to play previous track"

    def do_status(self, s):
        print "Track :"
        subprocess.call(Track, shell=True)
        print "Artist :"
        subprocess.call(Artist, shell=True)
        print "Album :"
        subprocess.call(Album, shell=True)
    def help_status(self):
        print "execute shell commands"

    def do_clear(self, s):
        subprocess.call("clear", shell=True)
    def help_clear(self):
        print "Clear screen"

    def do_quit(self, line):
        return True

    def help_quit(self):
        print "Bye...."
    
    if __name__ == '__main__':
        SpotiPy().cmdloop()
    		
You can download full source code: [https://github.com/ariestiyansyah/SpotiPy](https://github.com/ariestiyansyah/SpotiPy)

Cheers :D

