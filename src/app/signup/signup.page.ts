// signup.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss'],
})
export class SignupPage {
  fullName: string='';
  email: string='';
  password: string='';

  constructor(private router: Router) {}

  signUp() {
    // Add your sign-up logic here
    // For now, let's assume the sign-up is successful and navigate to the login page
    this.router.navigate(['/login']);
  }
}
