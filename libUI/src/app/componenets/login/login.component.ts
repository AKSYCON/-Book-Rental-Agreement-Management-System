import { Component } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  dis = '';
  hid = false;

  constructor(private authService: AuthserviceService,private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required]),
  })

  get Email() : FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get Password() : FormControl{
    return this.loginForm.get("password") as FormControl;
  }

  save(){

    this.authService.loginUser([
      this.loginForm.value.email,
      this.loginForm.value.password,
    ]).subscribe(
      (res) => {
        if(res=='fail')
        {
          this.dis = 'login Error';
          this.hid = false;
        }
        else{
          this.authService.setToken(res);
          this.router.navigateByUrl('allBook');
        }
      }
    )
    console.log(this.loginForm.value);
  }
}
