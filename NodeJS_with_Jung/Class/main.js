"use strict";

class cacheManager {
  constructor() {
    this.config = [];
  }
  addConfig(obj = {}) {
    this.config.push(obj);
  }
  getConfig() {
    return this.config;
  }
}

const CacheManager = new cacheManager();
CacheManager.addConfig({
  port: 8000,
});
CacheManager.addConfig({
  cert: "../../test.crt",
});
const config = CacheManager.getConfig();
console.log(config);

module.exports = cacheManager;
