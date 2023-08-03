const puppeteer = require('puppeteer'); // This is to call puppeteer.Very impoprtant at the top of our test script

async function runTest() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Replace 'https://example.com' with the URL of your deployed website.
    await page.goto('https://326foodrestaurant.netlify.app/', { waitUntil: 'domcontentloaded' });

    // Perform checks or interactions here to validate the website's functionality.
    // For example:
    // const pageTitle = await page.title();
    // expect(pageTitle).toContain('Your Ecommerce Website');

    // Example: Click on a link and check if the destination page loads.
     //await page.click('a[href="/contact"]');

    // await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    // expect(page.url()).toContain('/contact');

    console.log('Puppeteer test completed successfully.');
  } catch (error) {
    console.error('Puppeteer test failed:', error);
  } finally {
    await browser.close();
  }
}

runTest();