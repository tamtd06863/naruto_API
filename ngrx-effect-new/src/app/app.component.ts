import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Auth} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-effect-new';
  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged(async (auth: any) => {
      if (auth){
        let idToken = await auth.getIdToken()
        console.log(idToken);
        console.log('User is logged in:', auth);
      }else{
        console.log('No user is logged in:', auth);
      }
    })
  }
}
