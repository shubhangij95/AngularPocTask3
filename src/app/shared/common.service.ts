import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile';
import { Catogories } from '../model/catogories';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient)
  {}

  button:string="submit";


profile:Profile={
  profileId:0,
  profileName:" "
}


category:Catogories={

  cId:0,
  cName:" ",
  rating:" ",
  subCategories:[{
    sId:0,
    sName:" "

  }]
}


 url:string="http://localhost:8083/savedata";

 url1:string="http://localhost:8083/getdata";






//  postdata(p:Profile)
//  {
//    return this.http.post(this.url,p);
//  }

//  getdata():Observable<Profile[]>
//  {
//    return this.http.get<Profile[]>(this.url1);
//  }

 postcategorydata(c:Catogories)
 {
   return this.http.post(this.url,c);
 }


 getdata():Observable<Catogories[]>
 {
   return this.http.get<Catogories[]>(this.url1);
  }

}
