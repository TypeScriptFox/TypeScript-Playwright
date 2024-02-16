import { Page } from "@playwright/test";

class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://playwright.dev/");
  }

  async getTitle() {
    return this.page.title();
  }

  async clickGetStartedLink() {
    await this.page.click("text=Get started");
  }

  async getInstallationHeading() {
    return this.page.locator("text=Installation");
  }
}

export default PlaywrightHomePage;
