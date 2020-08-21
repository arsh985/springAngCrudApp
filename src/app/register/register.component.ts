import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User(0,"",0,"");
  message:any;
  constructor(private servive :UserRegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow(){
   let resp = this.servive.doRegistration(this.user);
   resp.subscribe((data) =>this.message=data);
  }

}
