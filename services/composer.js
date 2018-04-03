
class Composer {
  constructor() {
    this.store = {};
  }
  _find(key) {
    return store[key];
  }

  _store(key, value) {
    store[key] = value;
  }

  _compose(data) {
    return data;
  }
  /**
   * sets the find function
   * @param {async function} func
   */
  find(func) {
    this._find = func;
  }

  /**
   * sets the store function
   * @param {async function} func
   */
  store(func) {
    this._store = func;
  }

  /**
   * sets the compose function
   * @param {async function} func
   */
  compose(func) {
    this._compose = func;
  }

  /**
   *
   * @param {*} key
   * @param {*} data
   */
  async event(key, data) {
    this._store(key, await this._compose(data));
  }

  /**
   * Search the store based off the key value.
   * @param {string} key
   */
  async search(key) {
    return this._find(key);
  }

}

module.exports = Composer;
