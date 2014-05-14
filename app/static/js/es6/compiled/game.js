(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#login').click(login);
    $('#seed').click(seed);
    $('#getforest').click(getForest);
    $('#forest').on('click', '.tree.alive', grow);
    $('#forest').on('click', ':button#chop', chop);
  }
  function chop() {
    var treeId = $(this).closest('.tree').data('id');
    var tree = $(this).closest('.tree');
    $.ajax({
      url: ("/tree/" + treeId + "/chop"),
      type: 'PUT',
      dataType: 'html',
      success: (function(user) {
        console.log(user);
        debugger;
      })
    });
  }
  function grow() {
    var tree = $(this);
    var treeId = $(this).data('id');
    $.ajax({
      url: ("/tree/" + treeId + "/grow"),
      type: 'PUT',
      dataType: 'html',
      success: (function(t) {
        tree.replaceWith(t);
      })
    });
  }
  function getForest() {
    var userId = $('#username').attr('data-id');
    $.ajax({
      url: ("/forest/" + userId),
      type: 'GET',
      dataType: 'html',
      success: (function(html) {
        $('#forest').empty().append(html);
      })
    });
  }
  function seed() {
    var userId = $('#username').data('id');
    $.ajax({
      url: '/seed',
      type: 'POST',
      dataType: 'html',
      data: {userId: userId},
      success: (function(tree) {
        $('#forest').append(tree);
      })
    });
  }
  function login(e) {
    var data = $(this).closest('form').serialize();
    $.ajax({
      url: '/login',
      type: 'POST',
      data: data,
      success: (function(r) {
        $('#login').prev().val('');
        $('#username').attr('data-id', r._id);
        $('#username').text(("Welcome " + r.username + "!"));
        console.log(r);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=game.map
