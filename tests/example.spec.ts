import { test, expect } from "@playwright/test";
import PlaywrightHomePage from "../pageObjects/PlaywrightHomePage";

test("Has a Logo", async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await homePage.navigate();

  // Expect the Logo of the page to Exist
  expect(await homePage.getLogo()).toBeTruthy();
});
