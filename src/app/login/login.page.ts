// login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string='';
  password: string='';

  constructor(private router: Router) {}

  login() {
    // Add your authentication logic here
    // For now, let's assume the login is successful and navigate to the dashboard
    this.router.navigate(['/dashboard']);
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  navigateToForgotPassword() {
    this.router.navigateByUrl('/forgot-password');
  }
}
