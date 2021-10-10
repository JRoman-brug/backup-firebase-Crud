import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<any>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.user
  }

  async register(email: string, password: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password)

    return result
  }

  async auth(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logOut() {
    return this.afAuth.signOut()
      .then(() => {
        console.log('Metodo logout: te saliste de la cuenta')
      })
      .catch(e => {
        console.log(e)
      })
  }

  async authState() {
    return await this.afAuth.onAuthStateChanged(user => {
      if (user) {
        console.log("Auth: salio todo re piola, estas logeado")
      }
      else {
        console.log("Auth: no estas logeado CAPO")
      }
    })
  }

  loginGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async authCurrentUser(){
    return await this.afAuth.authState.pipe(first()).toPromise()
  }

  getUserState(): Observable<any>{
    return this.user;
  }
}