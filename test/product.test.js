const { By } = require("selenium-webdriver");
const assert = require("assert");
const { getDriver } = require("../utils/driver");

describe("E-commerce Product Testing", function () {
  let driver;

  this.timeout(30000);

  beforeEach(async () => {
    driver = await getDriver();
  });

  afterEach(async () => {
    await driver.quit();
  });

  // 🔐 Login Test
  it("should login successfully", async () => {
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    let url = await driver.getCurrentUrl();
    assert(url.includes("inventory"));
  });

});