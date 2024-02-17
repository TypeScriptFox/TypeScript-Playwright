import { Page } from "@playwright/test";

class LogInPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.saucedemo.com/");
  }
  async getUserNameField() {
    return await this.page.locator('_react=[id="user-name"] >> input');
  }

  async getPasswordField() {
    return await this.page.locator('_react=[type="password"] >> input');
  }
}

export default LogInPage;
