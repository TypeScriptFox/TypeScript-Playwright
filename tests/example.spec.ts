import { test, expect } from "@playwright/test";
import PlaywrightHomePage from "../pageObjects/PlaywrightHomePage";

test("Username and Password Fields are Visible", async ({ page }) => {
  const loginPage = new PlaywrightHomePage(page);

  await loginPage.navigate();

  // Expect the Logo of the page to Exist
  await (await loginPage.getUserNameField()).waitFor({ state: "visible" });
  await (await loginPage.getPasswordField()).waitFor({ state: "visible" });
});
