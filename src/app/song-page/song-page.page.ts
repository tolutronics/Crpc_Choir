import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.page.html',
  styleUrls: ['./song-page.page.scss'],
})
export class SongPagePage implements OnInit {
  sub:any;
  title:any;
  content:any;
  constructor(public http:HttpClient, public activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((res)=>{

      this.title = res['title'];
    });
    this.http.get('./assets/database.json').subscribe((res)=>{
      this.sub=res;
      this.sub.forEach(element => {
        if (element.title==this.title) {
         // console.log(element.title);
         this.content=element.content;

          
        }
   
      })

      
    })
   }

  ngOnInit() {
  }

}
