Template.body.events = function(events) {
  for (var eventMap in events) {
    (function(events, eventMap) {
      var handler = events[eventMap];
      var maps = eventMap.split(",");
      maps.forEach(function(map) {
        map = $.trim(map);
        var split = map.split(" ");
        var event = split[0];
        if (split.length === 1) {
          $(document).on(event, function(e) {
            var data = {};
            handler.apply(this, [e, data]);
          });
        } else {
          var selector = split.slice(1).join(" ");
          $(document).delegate(selector, event, function(e) {
            var el = $(e.currentTarget).get(0);
            var data = Blaze.getData(el);
            var tpl = (Blaze.getView(el) && Meteor._get(Blaze.getView(el), "_templateInstance")) || {};
            handler.apply(this, [e, data, tpl]);
          });
        }
      });
    })(events, eventMap);
  }
}
