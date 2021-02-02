import { Component } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlappyBird';

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
  }

