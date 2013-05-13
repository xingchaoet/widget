define(function(require) {

  var $ = require('$');
  var Widget = require('widget');

  describe('AutoRender', function() {
    it('autoRenderAll', function(done) {
      var dom = $('<div id="test1" data-widget="widget" data-class-name="widget"></div>');
      dom.appendTo(document.body);
      Widget.autoRenderAll(function() {
        var test = Widget.query('#test1');
        expect(test.get('className')).to.be('widget');
        expect(test.element[0]).to.be(dom[0]);
        dom.remove();
        test.destroy();
        done();
      });
    });

    it('autoRender trigger', function(done) {
      var dom = $('<div id="element">element</div>').appendTo(document.body);
      var trigger = $('<div id="test2" data-widget="widget" data-class-name="widget" data-widget-role="trigger" data-element="#element"></div>');
      trigger.appendTo(document.body);
      Widget.autoRenderAll(function() {
        var test = Widget.query('#test2');
        expect(test.get('className')).to.be('widget');
        expect(test.get('trigger')[0]).to.be(trigger[0]);
        expect(test.element.html()).to.be('element');
        trigger.remove();
        dom.remove();
        test.destroy();
        done();
      });
    });
  });
});