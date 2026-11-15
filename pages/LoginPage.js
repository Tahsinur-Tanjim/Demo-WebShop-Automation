class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('.ico-login');
    this.emailField = page.locator('#Email');
    this.passwordField = page.locator('#Password');
    this.loginButton = page.locator('input.login-button');
    this.errorMessage =
      page.locator('.validation-summary-errors');
  }

  async login(email, password) {
    await this.loginLink.click();
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
