import { test, expect } from "@playwright/test";
import PlayWrightHomePage from "../pageObjects/PlayWrightHomePage";

test("has title", async ({ page }) => {
  const homePage = new PlayWrightHomePage(page);

  await homePage.navigate();

  // Expect a title "to contain" a substring.
  expect(await homePage.getTitle()).toContain("Playwright");
});
