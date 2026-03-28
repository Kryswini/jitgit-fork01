import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage:Locator;


  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('div.oxd-alert-content');
  }

  async open(): Promise<void> {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
<<<<<<< HEAD

  async getErrorMessage(): Promise<string> {
  return await this.errorMessage.textContent() || '';
  }
=======
  //buahhahahahahahahhahahahhahahahahahhahahahahahahahahh
>>>>>>> main
}
