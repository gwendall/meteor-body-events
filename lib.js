Template.body.events = function(events) {
  for (var key in events) {
    (function(o, k) {
      var handler = o[k];
      var split = k.split(" ");
      var ev = split[0];
      if (split.length === 1) {
        $(document).on(ev, function(e) {
          var data = {};
          handler.apply(this, [e, data]);
        });
      } else {
        var selector = split.slice(1).join(" ");
        $(document).delegate(selector, ev, function(e) {
          var el = $(e.currentTarget).get(0);
          var data = Blaze.getData(el);
          handler.apply(this, [e, data]);
        });
      }
    })(events, key);
  }
}
