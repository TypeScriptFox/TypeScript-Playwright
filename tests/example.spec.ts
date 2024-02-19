import { test, expect } from "@playwright/test";
import LogInPage from "../pageObjects/LogInPage";

test("Username and Password Fields can have numbers entered into them", async ({
  page,
}) => {
  const loginPage = new LogInPage(page);

  await loginPage.navigate();

  // Expect the UserName and Password fields of the page to Exist
  await (await loginPage.getUserNameField()).waitFor({ state: "visible" });
  await (await loginPage.getPasswordField()).waitFor({ state: "visible" });

  await (await loginPage.getUserNameField()).fill("123");
  await (await loginPage.getPasswordField()).fill("123");

  expect(await (await loginPage.getUserNameField()).inputValue()).toBe("123");
  expect(await (await loginPage.getPasswordField()).inputValue()).toBe("123");
});
