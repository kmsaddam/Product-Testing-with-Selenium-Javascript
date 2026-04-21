const { Builder, Browser } = require("selenium-webdriver");

async function getDriver() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  await driver.manage().window().maximize();
  await driver.get("https://www.saucedemo.com/");
  return driver;
}

module.exports = { getDriver };