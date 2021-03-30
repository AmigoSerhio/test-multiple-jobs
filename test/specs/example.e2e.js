const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", () => {
    LoginPage.open();

    LoginPage.login("tomsmith", "SuperSecretPassword!");
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining("You logged into a secure area!");
    console.log("new change in project");
    console.log("new branch add");
    console.log("fix bug");
    console.log("new branch add");
    console.log("fix bug");
    console.log("new ficsing");
  });
});
