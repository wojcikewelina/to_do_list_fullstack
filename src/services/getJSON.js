let data = require("./testAPI.json");

export function getApi() {
  const promise = new Promise((resolve, rejected) => {
    resolve(data);
    console.log(data);
  });

  return promise;
}
