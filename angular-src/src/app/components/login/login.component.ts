import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  errorMessage: String;

  invalid: Boolean;

  constructor(
      private authService: AuthenticationService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
      const user = {
        username: this.username,
        password: this.password
      }
      this.authService.authenticateUser(user).subscribe(data => {
          if(data.success) {
              this.invalid = false;
              this.router.navigate(['/dashboard']);
              this.authService.storeData(data.token, data.user);       
          } else {
              this.errorMessage = data.message;
              this.invalid = true;
          }
      });
  }
}
