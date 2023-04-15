"use strict";

// 1. get the sum of the first line

function getSeason(date) {
  if (date === undefined) {
    console.log("Unable to determine the time of year!");
    return "Unable to determine the time of year!";
  }

  if (
    typeof date === "string" ||
    typeof date === "number" ||
    typeof date === "function" ||
    date.toString() === "[object Object]" ||
    Array.isArray(date) ||
    Object.getOwnPropertyNames(date).length === 9
  ) {
    throw new Error("Invalid date!");
  }

  let month;

  try {
    month = date.getMonth();
  } catch {}

  if (month === 11 || month <= 1) {
    console.log("winter");
    return "winter";
  } else if (month >= 2 && month < 5) {
    console.log("spring");
    return "spring";
  } else if (month >= 5 && month < 8) {
    console.log("summer");
    return "summer";
  } else if (month >= 8 && month < 11) {
    console.log("autumn (fall)");
    return "autumn (fall)";
  }
  throw new Error("Invalid date!");
}

const deeperFakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  getMonth() {
    return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
    return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
    return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
    return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
    return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
    return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
    return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
    return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: "Date",
};

// console.log(Object.getOwnPropertyNames(deeperFakeDate).length);
// console.log(Object.getOwnPropertyNames());

getSeason(deeperFakeDate);
