import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: {username:string,email:string,password: string} = {
    username: "",
    email: "",
    password: ""
  }
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.userForm = this.formBuilder.group({
      username:['',[Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit():void{
    console.log((localStorage.getItem("user")));
  
    this.Allusers = JSON.parse(localStorage.getItem("user") !) || []; 
   }

  public Allusers:Array<object> = []

   adduser() {
    if (this.userForm.valid) {
      console.log(this.user);
      const newuser = {...this.userForm.value}
      this.Allusers.push(newuser)
      console.log(this.Allusers);
      localStorage.setItem("user", JSON.stringify(this.Allusers))
      console.log(this.userForm.value);
      alert("signup successful")
      this.router.navigate(['/login']);
    } else {
      alert("No user available")
    }
  }
}
