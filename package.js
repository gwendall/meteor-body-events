Package.describe({
  name: "gwendall:body-events",
  summary: "Get Templace.body.events() working",
  version: "0.1.0",
  git: "https://github.com/gwendall/meteor-body-events"
});

Package.on_use(function (api, where) {

  api.use([
    "templating",
    "jquery"
  ], "client");

  api.add_files([
    "lib.js"
  ], "client");

});
