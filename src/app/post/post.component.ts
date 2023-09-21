import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public post:Array<object> =[]
       postForm:FormGroup 
       selectedImage: File | null = null;

 

    constructor (private formBuilder:FormBuilder) {
      this.postForm = this.formBuilder.group({
        content:['',[Validators.required,Validators.minLength(5)]],
        title: ['', [Validators.required, Validators.email]],
        image: ['', [Validators.required, Validators.minLength(6)]],
      });
    }

    Selectedfile(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        this.selectedImage = inputElement.files[0];
        this.readFile();
      }
    }

    readFile(){
      if (this.selectedImage) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result as string;
          console.log(base64Data); 
        };
        reader.readAsDataURL(this.selectedImage);
      }
    }
    
    ngOnInit():void{
      this.post = JSON.parse(localStorage.getItem("post")!) || []
    }
  makepost() {
   console.log(this.postForm.value);
      this.post.push(this.postForm.value)
      console.log(this.post);
      localStorage.setItem("post",JSON.stringify(this.post))
      
  }
}
