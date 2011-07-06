/*
---
requires:
  - Core/Class.Extras
  - Core/Element
  - Core/Fx.Tween

provides: Messagebox
...
*/
var MessageBox = new Class({

  Implements: Options,

  options: {
    delay: 5000,
    wrapper: document.id('messages-box'),
    container: document.id(document.body),
    position: 'tr',
    autoClose: true
  },

  initialize: function(options) {
    this.setOptions(options);
    if (this.options.wrapper) 
      return;
    this.wrapper = new Element('div#messages-box');
    this.wrapper.inject(this.options.container);
  },

  open: function(body, titlePlain, imageUrl, callback) {
    this.wrapper.set('class', this.options.position);
    var image = '';
    var title = '';
    if (imageUrl)
    {
      image = '<div class="msg-image"><img src="' + imageUrl + '" alt="" /></div>';
    }
    if (titlePlain)
    {
      title = '<div class="msg-message"><span class="msg-title">' + titlePlain + '</span>';
    }
    var box = new Element('div', {
      'html': 
        image 
        + title
        + '<span class="msg-body">'
        + body + '</span></div>'
    });

    box.addEvent('click', function(){
      if (callback)
      {
        callback.apply();
      }
      this.close(box);
    }.bind(this));

    box.setStyle('opacity', 0);
    box.inject(this.wrapper,
      (this.options.position == 'br' || this.options.position == 'bl') ? 'top' : 'bottom'
    );

    var fx = new Fx.Tween(box, {duration: 250});
    box.store('fx', fx);
    fx.start('opacity', 1);

    if (this.options.autoClose === true)
    {
      this.close.delay(this.options.delay, this, box);
    }
  },
  
  close: function(box) {
    var fx = box.retrieve('fx');
    if ( ! fx)
      return;
    fx.addEvent('complete', function(){
      box.destroy();
    });
    fx.start('opacity', 0);
  }

});
