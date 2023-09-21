import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getuser(){
    return JSON.parse(localStorage.getItem("user") !)
  }
  public getpost(){
    return JSON.parse(localStorage.getItem("post")!)
  }
}
