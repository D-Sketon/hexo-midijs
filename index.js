"use strict";

const fs = require("fs");
const path = require("path");
const css = hexo.extend.helper.get("css").bind(hexo);
const js = hexo.extend.helper.get("js").bind(hexo);

const processArgs = require("./lib/processArgs.js");
const template = require("./lib/template.js");

hexo.extend.generator.register("midijs_button", () => [
  {
    path: "source/midijs_button.png",
    data: () =>
      fs.createReadStream(
        path.resolve(__dirname, "./source", "midijs_button.png")
      ),
  },
]);

hexo.extend.generator.register("midijs_css", () => [
  {
    path: "source/midijs.css",
    data: () =>
      fs.createReadStream(path.resolve(__dirname, "./source", "midijs.css")),
  },
]);

hexo.extend.tag.register("midijs", (args) => template(processArgs(args)), {
  ends: true,
});

hexo.extend.injector.register(
  "head_begin",
  () => css("/source/midijs.css"),
  "post"
);
