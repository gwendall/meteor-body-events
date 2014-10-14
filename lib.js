Template.body.events = function(events) {
  for (var key in events) {
    var ev = key.split(" ")[0];
    var selector = key.split(" ").slice(1).join(" ");
    var handler = events[key];
    $(document).delegate(selector, ev, function(e) {
      var el = $(e.currentTarget).get(0);
      var data = Blaze.getData(el);
      handler.apply(this, [e, data]);
    });
  }
}
