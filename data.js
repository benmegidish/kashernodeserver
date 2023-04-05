
const { Builder, By } = require('selenium-webdriver')
const utiles = require('./telegram');
const helpers = require('./helpers/help');
const chrome = require('selenium-webdriver/chrome');
const searchData = async (city) => {


    const service = new chrome.ServiceBuilder();
    const driver = new Builder().forBrowser('chrome').setChromeService(service).build();
    //let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get(`https://www.rest.co.il/kosher-restaurants/${city}/kosher/`);
    let res = (await driver.findElement(By.className('restaurant-info-top')).getText()).trim();
    res = res.substring(6, 9);
    let num = parseInt(res);
    console.log("the num is : " + num);
    let page = 1;
    let counter = 0
    while (counter < num) {
        driver.manage().window().maximize();
        await driver.get('https://www.rest.co.il/kosher-restaurants/' + city + '/kosher/page-' + page);
        let places = await driver.findElements(By.css(".rest-title"));
        for (let place of places) {
            counter += 1
            await helpers.sleep(1);
            console.log(await place.getText() + " number: " + counter)
            utiles.SendMessage(await place.getText())
        }
        page += 1
    }
    driver.quit();
};

module.exports = { searchData };