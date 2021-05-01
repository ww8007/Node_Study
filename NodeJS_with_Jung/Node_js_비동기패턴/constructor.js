"use strict";

class DatabaseManager {
  constructor(settings) {
    this.settings = settings;
    this.init = init; //Promise <pending>, Promise cache : 최초에만 실행이됨
  }

  query() {
    // Query('') Agnostic
  }

  async init() {}

  async newMember() {
    //db 연결되는 과정이 필요
    await this.init(); // 한 번 호출이 되어 resolve 되어 cache로 변하게 되면
    // 다시 호출이 되지 않는다.
  }
  async deleteMember() {
    await this.init();
  }
}
