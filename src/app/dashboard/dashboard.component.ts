import { Component } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public post:any[] = []
  constructor(public mypost:StorageService){
    this.post = mypost.getpost()
  }
  ngOnInit():void{
    this.post = this.mypost.getpost()
    console.log(this.post);
    
  }
  truncatedContent(content: string): string {
    return content.length > 50 ? content.slice(0, 50) + '...' : content;
  }
  showFullContent(index: number){
    this.post[index].showFull = true;
  }

  myArray: any[] = [
    { id: 1,
     title: "Unveiling Paradise: A Blissful Escape to Tropical Heaven!",
     content: "Welcome to our vacation blog, where we take you on a journey to paradise itself! Our adventure unfolds on a breathtaking island getaway, a dreamy destination filled with sun-kissed beaches, lush greenery, and a vibrant culture. Join us as we explore hidden gems, indulge in mouthwatering cuisine, and create unforgettable memories." ,
     image:"https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1268855.jpg&fm=jpg",
     author:"Aishat Adekunle"
    },
    { id: 2,
      title: "Unveiling Paradise: A Blissful Escape to Tropical Heaven!",
      content: "Welcome to our vacation blog, where we take you on a journey to paradise itself! Our adventure unfolds on a breathtaking island getaway, a dreamy destination filled with sun-kissed beaches, lush greenery, and a vibrant culture. Join us as we explore hidden gems, indulge in mouthwatering cuisine, and create unforgettable memories." ,
      image:"https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1268855.jpg&fm=jpg",
      author:"Aishat Adekunle"
    },
    { id: 3,
      title: "Unveiling Paradise: A Blissful Escape to Tropical Heaven!",
      content: "Welcome to our vacation blog, where we take you on a journey to paradise itself! Our adventure unfolds on a breathtaking island getaway, a dreamy destination filled with sun-kissed beaches, lush greenery, and a vibrant culture. Join us as we explore hidden gems, indulge in mouthwatering cuisine, and create unforgettable memories." ,
      image:"https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1268855.jpg&fm=jpg",
      author:"Aishat Adekunle"
     },

    
  ];
}
