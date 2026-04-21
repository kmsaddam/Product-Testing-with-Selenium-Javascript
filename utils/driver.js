const { Builder } = require("selenium-webdriver");

async function getDriver() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.manage().window().maximize();
  await driver.get("https://www.saucedemo.com/");
  return driver;
}

module.exports = { getDriver };