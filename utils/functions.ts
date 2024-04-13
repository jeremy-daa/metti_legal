const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("", salt);

const cropString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) return str;

  const lastPeriodIndex = str.lastIndexOf(".", maxLength);

  if (lastPeriodIndex !== -1) {
    return str.slice(0, lastPeriodIndex + 1);
  } else {
    return str.slice(0, maxLength) + "...";
  }
};
const compareHash = (pass: string, hash: string) => {
  return bcrypt.compare(pass, hash);
};
const hashPassword = (pass: string) => {
  return bcrypt.hashSync(pass, salt);
};

export { cropString, compareHash, hashPassword };
