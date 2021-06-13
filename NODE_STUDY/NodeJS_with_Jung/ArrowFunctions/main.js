"use strict";

const { resolve } = require("node:path");

API.prototype.get = function (resource) {
  var self = this;
  return new Promise(function (resolve, reject) {
    http.get(self.uri + resource, function (data) {
      resolve(data);
    });
  });
};

API.prototype.get = (resource) =>
  new Promise((resolve, reject) =>
    http.get(this.uri + resource, (data) => {
      resolve(data);
    })
  );
