import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../service/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  display:string = '';
  isAcc: boolean = false;
  constructor(private authService: AuthserviceService) {
    
    
  }
  ngOnInit(): void {
    
  }

  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required])
  });

  save()
  {

    this.authService.registerUser([
      this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.password,
    ]).subscribe(res =>{
      if(res == 'Done')
      {
        this.display = 'Success';
        this.isAcc = true;
      }
      else if(res == 'Alerady User')
      {
        this.display = 'Alerady Exist';
        this.isAcc= false;
      }
      else{
        this.display = 'Failed';
        this.isAcc = false;
      }
    })
  }
  get Name() : FormControl{
    return this.registerForm.get("name") as FormControl;
  }
  get Email() : FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Password() : FormControl{
    return this.registerForm.get("password") as FormControl;
  }

}
