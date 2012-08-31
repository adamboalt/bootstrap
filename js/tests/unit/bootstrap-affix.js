define(["../../bootstrap-affix.js", "zq", "QUnit"], function(affix, $, q){
  var module = q.module,
    test = q.test,
    ok = q.ok;

  function run() {
    module("bootstrap-affix")

      test("should be defined on jquery object", function () {
        ok(affix, 'affix method is defined')
      })

      test("should return element", function () {
        ok(affix($(document.body))[0] == document.body, 'document.body returned')
      })

      test("should exit early if element is not visible", function () {
        var $affix = affix($.create('<div style="display: none"></div>'))
        $affix.data('affix').checkPosition()
        ok(!$affix.hasClass('affix'), 'affix class was not added')
      })

  }
  return {run:run}
});