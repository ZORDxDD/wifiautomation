const puppeteer = require("puppeteer");

async function fillCredentials(url, username, password) {
  const browser = await puppeteer.launch({
    // executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe', // Uncomment and replace with the path to Brave on Windows
    headless: false,
  });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle2" });

    await page.waitForSelector("#ft_un");
    await page.waitForSelector("#ft_pd");

    await page.type("#ft_un", username);
    await page.type("#ft_pd", password);

    await page.waitForSelector('input[type="submit"][value="Continue"]');

    await page.click('input[type="submit"][value="Continue"]');

    console.log("Credentials submitted successfully!");
  } catch (error) {
    console.error("Error occurred:", error);
  }

  await browser.close(); // close the browser automatically
}

const url = "http://www.msftconnecttest.com/redirect";
const username = "23135083";
const password = "11111111";

fillCredentials(url, username, password);
