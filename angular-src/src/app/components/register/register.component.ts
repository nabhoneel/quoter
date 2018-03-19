import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  invalid: Boolean;
  clicked: Boolean;
  registered: Boolean;
  notRegistered: Boolean;

  constructor(
      private validateService: ValidateService,
      private authService: AuthenticationService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
      const newUser = {
          name: this.name,
          email: this.email,
          username: this.username,
          password: this.password
      }
      this.clicked = true;
      if(!this.validateService.validateRegister(newUser)) {
          this.invalid = false;
          return false;
      }
      else this.invalid = true;

      this.authService.registerUser(newUser).subscribe(data => {
          if(data.success) {
              this.registered = true;
              setTimeout(() => {
                this.router.navigate(['/login']);
                }, 3000);
          } else {
              this.notRegistered = true;
              this.router.navigate(['/register']);
          }
      });
  }

  isValid() {
      if(this.clicked == true) return this.invalid;
      else return true;
  }

  changethis() {
      this.name = "fageyeah";
  }
}
