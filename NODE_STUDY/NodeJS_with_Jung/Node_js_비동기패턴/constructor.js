"use strict";

class DatabaseManager {
  constructor() {}

  static async BUILD(settings) {
    const config = await this.init(settings);
    // 수행하고자 하는 비동기 작업들을 여기서 실행
    // 이 아래에서 promise에 대한 내용들을 배열로 받아주면
    // 모든 비동기 작업에 대해서 넘겨주기가 가능하다.
    return new DatabaseManager([Promise]);
  }

  query() {
    // Query('') Agnostic
  }

  async init() {}

  async newMember() {}
  async deleteMember() {}
}

const manager = DatabaseManager.BUILD(settings);
