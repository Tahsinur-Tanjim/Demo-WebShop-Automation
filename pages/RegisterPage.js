class RegisterPage {
  constructor(page) {
    this.page = page;

    this.registerLink = page.locator('.ico-register');
    this.genderMale = page.locator('#gender-male');
    this.firstName = page.locator('#FirstName');
    this.lastName = page.locator('#LastName');
    this.email = page.locator('#Email');
    this.password = page.locator('#Password');
    this.confirmPassword = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
    this.continueButton = page.locator('input.button-1.register-continue-button');
  }

  async register(email) {
    await this.registerLink.click();
    await this.genderMale.click();
    await this.firstName.fill('Tahsin');
    await this.lastName.fill('Tanjim');
    await this.email.fill(email);
    await this.password.fill('Test123!');
    await this.confirmPassword.fill('Test123!');
    await this.registerButton.click();
    await this.continueButton.click();
  }
  async clickContinue() {
  await this.continueButton.click();
}
}

export default RegisterPage;