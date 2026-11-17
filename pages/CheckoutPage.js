class CheckoutPage {

  constructor(page) {
    this.page = page;

    // Search
    this.searchBox = page.locator('#small-searchterms');
    this.searchButton = page.locator("input[value='Search']");

    // Product
    this.productLink = page.getByRole('link', {
      name: 'Computing and Internet',
      exact: true
    });

    this.quantityField =
      page.locator('#addtocart_13_EnteredQuantity');

    this.addToCartButton =
      page.locator('#add-to-cart-button-13');

    // Cart
   this.cartButton =
  page.locator('.ico-cart').first();

    this.cartQuantity =
      page.locator('.qty-input');

    this.termsCheckbox =
      page.locator('#termsofservice');

    this.checkoutButton =
      page.locator('#checkout');

     this.country =
  page.locator('#BillingNewAddress_CountryId');

this.city =
  page.locator('#BillingNewAddress_City');

this.address =
  page.locator('#BillingNewAddress_Address1');

this.zipCode =
  page.locator('#BillingNewAddress_ZipPostalCode');

this.phone =
  page.locator('#BillingNewAddress_PhoneNumber');

this.billingContinue =
  page.locator("input[onclick='Billing.save()']");
  }

  async searchProduct(product) {
    await this.searchBox.fill(product);
    await this.searchButton.click();
  }

  async openProduct() {
    await this.productLink.click();
  }

  async setQuantity(quantity) {
    await this.quantityField.fill(quantity);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartButton.click();
  }

  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }


  async fillBillingAddress() {

  await this.country.selectOption({
    label: 'Bangladesh'
  });

  await this.city.fill('Dhaka');

  await this.address.fill('Banani');

  await this.zipCode.fill('1213');

  await this.phone.fill('01700000000');

  await this.billingContinue.click();
}

async continueShippingMethod() {}
async continuePaymentMethod() {}
async continuePaymentInfo() {}
async confirmOrder() {}
}

export default CheckoutPage;