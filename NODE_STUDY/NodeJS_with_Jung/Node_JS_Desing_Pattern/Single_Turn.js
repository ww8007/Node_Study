"use strict";

class CacheManager {
  constructor() {
    if (!CacheManager.instance) {
      this._cache = [];
      CacheManager.instance = this;
    }
    return CacheManager.instance;
  }
}

const instance = new CacheManager();
Object.freeze(instance);
