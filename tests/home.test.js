describe('WHRB.org Home', () => {
  beforeAll(async () => {
    await page.goto('https://whrb.org');
  }, 10000);

  it('should be titled "WHRB 95.3 FM - Harvard Radio Broadcasting"', async () => {
    await expect(page.title()).resolves.toMatch('WHRB 95.3 FM - Harvard Radio Broadcasting');
  });

  it('should display the WHRB logo', async () => {
    const logoImage = await page.$('a.brand img');
    const title = await logoImage.getProperty('title');
    const alt = await logoImage.getProperty('alt');

    await expect(title.jsonValue()).resolves.toMatch('WHRB 95.3FM - Harvard Radio Broadcasting');
    await expect(alt.jsonValue()).resolves.toMatch('WHRB Logo');
  });

  it('should display the main slider', async () => {
    await expect(page.$('main.home section.main-content section.featured-display.whrb-panel')).resolves.toBeTruthy();
  });
});
