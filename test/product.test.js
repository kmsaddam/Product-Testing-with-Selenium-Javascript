const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require("assert");
const { getDriver } = require("../utils/driver");

describe("Product Testing Suite", function () {
  let driver;

  this.timeout(100000);

  beforeEach(async () => {
    driver = await getDriver();
  });

  afterEach(async () => {
    await driver.quit();
  });


  console.log("Product Testing Suite is running...");

    // 🔐 Login Test
  it("should login successfully", async () => {
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    let url = await driver.getCurrentUrl();
    // console.log(url);
    assert(url.includes("inventory"));
  });

   it("should open a product and verify name", async () => {
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    await driver.findElement(By.className("inventory_item_name")).click();

    let productName = await driver.findElement(By.className("inventory_details_name")).getText();
    assert(productName.length > 0);
  });


});