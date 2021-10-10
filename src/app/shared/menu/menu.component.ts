import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user!: Observable<any>;
  constructor(private fAuth: AuthService) { }

  ngOnInit() {
    this.fAuth.getUserState().subscribe((user)=>{
      this.user = user;
    })
    console.log(this.user)
  }

  singOut() {
    this.fAuth.logOut()
  }


}
