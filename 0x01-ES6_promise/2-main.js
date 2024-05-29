import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve(10);
handleResponseFromAPI(promise);
