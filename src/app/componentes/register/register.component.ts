import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder, private authS:AuthService,private route:Router) {
    this.form = fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onRegister(){
    if(this.form.value.password == this.form.value.confirmPassword){
      this.authS.register(this.form.value.email, this.form.value.password)
        .then(userCredential=>{
          console.log("salio todo re piola" + userCredential)
        })
      
    }
    else{
      console.log("error")
    }
    // this.route.navigate(['/productsGrid'])
  }

}
