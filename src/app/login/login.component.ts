import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 public users:Array<object> = [];

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,public myuser: StorageService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit():void{
    this.users = this.myuser.getuser()
    console.log(this.users);
    const user = JSON.parse(localStorage.getItem("currentuser")!) || []
    console.log(user);
    
   }

  login(){
    const email = this.loginForm.get('email')?.value
    const password = this.loginForm.get('password')?.value
    console.log(email);
    console.log(password);
    
    const loguser = this.users.find((v: any)=> v.email === email  && v.password === password) 

    if(loguser) {
      alert("login successful")
      this.router.navigate(['/dashboard'])
      localStorage.setItem("currentuser", JSON.stringify(loguser))
    }else{
       alert("No user available")
    }
  }
}
