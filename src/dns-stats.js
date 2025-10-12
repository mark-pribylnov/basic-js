const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const divided = domains.map(el => {
    const arr = el.split(".");
    arr.reverse();

    return arr.map(el => {
      return "." + el;
    });
  });
  divided.sort((a, b) => {
    return b.length - a.length;
  });

  const obj = {};

  divided.forEach(el => {
    for (let i = 0; i <= el.length; i += 1) {
      if (!el[i]) break;
      if (i === 0) {
        const domain = el[i];

        if (!obj[domain]) {
          obj[domain] = 1;
        } else {
          obj[domain] += 1;
        }
      }
      if (i === 1) {
        const domain = el[i - 1] + el[i];

        if (!obj[domain]) {
          obj[domain] = 1;
        } else {
          obj[domain] += 1;
        }
      }

      if (i === 2) {
        const domain = el[i - 2] + el[i - 1] + el[i];

        if (!obj[domain]) {
          obj[domain] = 1;
        } else {
          obj[domain] += 1;
        }
      }
    }
  });

  // (function countDomain() {
  //   for (let i = 0; i <= divided[0].length - 1; i++) {
  //     for (let j = 0; j <= divided.length - 1; j++) {
  //       const domain = divided[j][i];
  //       if (domain) {
  //         if (!obj[domain]) {
  //           obj[domain] = 1;
  //         } else {
  //           obj[domain] += 1;
  //         }
  //       }
  //     }
  //   }
  // })();

  // for (let i = 0; i<=)

  // divided.forEach((el, ind, arr) => {
  //   //
  //   //
  //   arr.forEach((el, ind, arrInner) => {
  //     if (
  //       arr.every((_, __, arrInner1) => {
  //         arrInner1.includes(el);
  //       })
  //     ) {
  //       console.log(true);
  //     }
  //   });
  //   // if (
  //   //   arr.every((_, __, arrInner) => {
  //   //     return arrInner.includes();
  //   //   })
  //   // ) {
  //   // }
  // });
  // console.log(divided);
  // console.log(obj);

  return obj;
}

// console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));
// console.log(getDNSStats(["epam.com", "info.epam.com"]));
// console.log(getDNSStats(["epam.com"]));

module.exports = {
  getDNSStats,
};
