const { NotImplementedError } = require("../lib");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = email.split("@").at(-1);
  return domain;
}

console.log(getEmailDomain("very.unusual.@.unusual.com@usual.com"));

module.exports = {
  getEmailDomain,
};
