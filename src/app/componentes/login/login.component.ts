import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup

  constructor(private fAuth:AuthService, private fb:FormBuilder, private route:Router) { 
    this.form = fb.group({
      mail:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.fAuth.authState()
  }

  onLogin(){
    this.fAuth.auth(this.form.value.mail, this.form.value.password)
      .then(e =>{
        console.log('salio todo re piola')
        this.route.navigate(['/productos'])
      })
      .catch(e=>{
        console.log(e)
      })
  }

  loginGoogle(){
    this.fAuth.loginGoogle()
      .then(()=>{
        console.log("Google auth: Salio todo piola")
      })
      .catch(e=>{
        console.log(e)
      })
  }
}
