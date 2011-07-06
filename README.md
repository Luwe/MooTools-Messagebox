Mootools MessageBox
===================

Todo: Add documentation and examples

MooTools 1.3 popup messagebox. Based on TinyAlert by Danillos: [https://github.com/danillos/tinyalert](https://github.com/danillos/tinyalert).

Usage
-----

Adding a simple notification message that disappears after 5 seconds is easy:

    #JS
    var msg = new MessageBox(options);
    msg.open('This is an alert');

Optionally, an argument for a title, an image and a callback function can be given:

    #JS
    var msg = new MessageBox(options);
    msg.open('Another alert', 'Title', 'images/image.png', function(){dostuff})

The default behavior of the MessageBox can be altered by setting the following options:

**delay**: (default: 5000) Set the delay in miliseconds before the messagebox is auto closed 

**wrapper**: (default: document.id('messages-box') The DOM element where all messages will be placed in

**container**: (default: documen.id(document.body)) The DOM element where **wrapper** is placed in 

**position**: (default: tr) Position of the alerts (can be: tr = top-right, tl = top-left, br = bottom-right, bl = bottom-left)

**autoClose**: (default: true) Autoclose the messagebox after the delay or not
