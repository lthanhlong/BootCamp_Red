import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { isBuffer } from 'util';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  constructor(private auth:AngularFireAuth){}
 async logIn(){
      const provider = new firebase.default.auth.GoogleAuthProvider();
      try{
        await this.auth.signInWithPopup(provider);
        alert("login successfully");
      }catch(err){
        alert("failed");
      }

    }
  async logOut(){
    try{
      await this.auth.signOut();
      alert("Sigout successfully")
    }catch(err){
      alert("Sigout failed")
    }
  }
  public user:any;
  ngOnInit(): void {
    this.auth.authState.subscribe((event)=>{
      if(this.user==null||this.user==undefined){
        this.user = event;
      }
    })
  }

}
