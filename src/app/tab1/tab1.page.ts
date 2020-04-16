import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
songs:any[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
sub:any;
queryText: any;
loadedsongs = [] as any;
mates = [] as any; 
  constructor(public navCtrl: NavController, public router:Router, public http:HttpClient, public actRoute: ActivatedRoute) {
    

    this.http.get('./assets/database.json').subscribe((res)=>{
      console.log(res);
      this.sub=res;
    })
  }

  toSong(i){
    var q={
      title:i
    }
    this.router.navigate(["song-page"],{
      queryParams:q
    }

    
    );
     console.log(i);
   
  }
  ngOnInit() {
    this.http.get('./assets/database.json').subscribe(songList => {
    this.sub = songList;
    this.loadedsongs = songList;
    });
    }
  initializeItems(): void {
    this.sub = this.loadedsongs;
    }
  update(evt) {
    this.initializeItems(); 
    
    const searchTerm = evt.srcElement.value;
    
    if (!searchTerm) {
    return this.sub;
    }
    
    this.sub = this.sub.filter(currentData => {
    if ((currentData.title && searchTerm) || (currentData.content && searchTerm) || (currentData.composer && searchTerm))  {
    if ((currentData.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) ||
    (currentData.content.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) ||
    (currentData.composer.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)) {
      
    return true;
    }
    
    return false;
    }

    });
    
    }


}
