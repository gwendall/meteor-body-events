Package.describe({
  name: "gwendall:body-events",
  summary: "Get Template.body.events() working",
  version: "0.1.7",
  git: "https://github.com/gwendall/meteor-body-events"
});

Package.on_use(function(api, where) {
  api.use(["templating@1.0.7", "jquery@1.0.0"], "client");
  api.add_files(["lib.js"], "client");
});
