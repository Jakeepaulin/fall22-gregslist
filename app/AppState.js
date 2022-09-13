import { Car } from "./Models/Car.js";
import { Job } from "./Models/Job.js";
import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", Value);

  /** @type {import('./Models/Car').Car[]} */
  cars = loadState("cars", Car);

  /** @type {import('./Models/Job').Job[]} */

  jobs = [
    new Job({
      company: "Pluck & Chuck",
      jobTitle: "Pooper Scooper",
      hours: 38,
      rate: 5,
      description: "Self Explanatory",
      imgUrl:
        "https://alldogspoop.com/wp-content/uploads/2021/04/Poop-Scooping-for-1-Dog.jpg",

      id: "1",
    }),
  ];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
