Meteor Body Events
===================

Template.body.events working

Installation
------------

``` sh
meteor add gwendall:body-events
```

Methods
-------


``` javascript
Template.body.events({
  "click .btn": function(e, data) {
    // e -> jquery event
    // data -> Blaze data context of the DOM element triggering the event handler
  }
})
```

To do
-----

Return [e, tpl:Template.instance] instead of [e, data] - like for any Template.*.events handler
