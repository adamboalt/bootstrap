define(["../../bootstrap-alert.js", "zq", "QUnit"], function(al, $, q){
  var module = q.module,
    test = q.test,
    ok = q.ok;

  function run(){

    module("bootstrap-alerts")

      test("should be defined on jquery object", function () {
        ok(al, 'alert method is defined')
      })

      test("should return element", function () {
        ok(al($(document.body))[0] == document.body, 'document.body returned')
      })

      test("should fade element out on clicking .close", function () {
        var alertHTML = '<div class="alert-message warning fade in">'
          + '<a class="close" href="#" data-dismiss="alert">×</a>'
          + '<p><strong>Holy guacamole!</strong> Best check yo self, you\'re not looking too good.</p>'
          + '</div>'
          , alert = al($.create(alertHTML).appendTo('#qunit-fixture'))



        alert.find('.close')
            .fire("click")

        ok(!alert.hasClass('in'), 'remove .in class on .close click')
      })

      test("should remove element when clicking .close", function () {
        // not supported yet
        // $.support.transition = false

        var alertHTML = '<div class="alert-message warning fade in">'
          + '<a class="close" href="#" data-dismiss="alert">×</a>'
          + '<p><strong>Holy guacamole!</strong> Best check yo self, you\'re not looking too good.</p>'
          + '</div>'
          , alert = al($.create(alertHTML).appendTo('#qunit-fixture'))

        ok($('#qunit-fixture').find('.alert-message').length, 'element added to dom')

        alert.find('.close').fire("click")

        ok(!$('#qunit-fixture').find('.alert-message').length, 'element removed from dom')
      })

      test("should not fire closed when close is prevented", function () {
        // not supported yet
        // $.support.transition = false
        stop();
        al($('<div class="alert"/>')
          .on('close', function (e) {
            e.preventDefault();
            ok(true);
            start();
          })
          .on('closed', function () {
            ok(false);
          }), 'close')
      })
  }

  return {run:run};

});