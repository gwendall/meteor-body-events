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
  "click .btn": function(e, data, tpl) {
    // e -> jquery event
    // data -> Blaze data context of the DOM element triggering the event handler
    // tpl -> the parent template instance for the target element
  }
})
```
