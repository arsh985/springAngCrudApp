import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:8080/service/user/add",user,{responseType:'text' as 'json'});
  }

  public getAllUser(){
    return this.http.get("http://localhost:8080/service/user/row")
  }

  public deleteUser(id:number){
    return this.http.delete("http://localhost:8080/service/user/delete/"+id);
  }
}
