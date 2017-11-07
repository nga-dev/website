var _nga = function() {
  var _this = this;

  _this.setUpMagicLinks = function() {
    $('[data-goto]').click(function() {
      window.location = $(this).data('goto')
    });
  }

  _this.setUpMagicForms = function() {
    $('[data-magicForm]').submit(function(e) {
      e.preventDefault();

      //submit
      $.post($(this).data('connect'), $(this).serialize(), function(data) {
        location.reload();
      });
    });
  }

  _this.setUpPostsSection = function() {
    setInterval(function() {

    }, 2000);
  }

  _this.build = function() {
    //prepare for spa architecture later
    _this.setUpMagicLinks();

    //prepare for i/o
    _this.setUpMagicForms();
  }

  _this.build();
}

$(function() {
  _nga = new _nga();
})
