import chalk from "chalk";
const ERR_NO_ENV_FLAG:string = chalk.red(
  `You must pass an --env.env flag into your build for webpack to work!`
);

module.exports = {
  ERR_NO_ENV_FLAG
};
