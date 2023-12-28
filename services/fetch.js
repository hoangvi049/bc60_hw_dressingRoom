function Data() {
  this.fetchJSON = function () {
    return fetch("./../data/Data.json").then((res) => res.json());
  };
}
