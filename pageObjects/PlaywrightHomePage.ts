import { Page } from "@playwright/test";

class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://automationintesting.online/");
  }

  async getLogo() {
    return this.page.locator(
      '_react=Np[logoDetails = "https://www.mwtestconsultancy.co.uk/img/rbp-logo.png"'
    );
  }
}

export default PlaywrightHomePage;
