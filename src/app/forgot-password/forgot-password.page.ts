// forgot-password.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.page.html',
  styleUrls: ['forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string='';

  constructor(private router: Router) {}

  resetPassword() {
    // Add your reset password logic here
    // For now, let's assume the password reset is successful and navigate to the login page
    this.router.navigate(['/login']);
  }
}
