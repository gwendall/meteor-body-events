Template.body.events = function(events) {
  for (var key in events) {
    (function(o, k) {
      var ev = k.split(" ")[0];
      var selector = k.split(" ").slice(1).join(" ");
      var handler = o[k];
      $(document).delegate(selector, ev, function(e) {
        var el = $(e.currentTarget).get(0);
        var data = Blaze.getData(el);
        handler.apply(this, [e, data]);
      });
    })(events, key);
  }
}
