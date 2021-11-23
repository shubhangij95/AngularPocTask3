import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient)
  {}

  button:string="submit";

u:User={
  id:0,
  name:" ",
  surname:" ",
  city:" ",
  pincode:0,
  email:" ",
  dob:" ",
  joiningDate:" ",
  income:0,
  deleted:false
}

url:string="http://localhost:8083/register";

url1:string="http://localhost:8083/list";

url2:string="http://localhost:8083/delete";

url3:string="http://localhost:8083/getSingleUser";

url4:string="http://localhost:8083/update";




postdata(s:User)
{
  return this.http.post(this.url,s);
}

getdata():Observable<User[]>
{
  return this.http.get<User[]>(this.url1);
}

datadeleted(id:number)
{
  return this.http.delete(this.url2 + '/' +id);
}

getSingleUser(id: number): Observable<any> 
{
  return this.http.get(this.url3 + '/' + id);
}

updateEmployee(value: any,id:number): Observable<Object> {
  return this.http.put(this.url4, value);
}


}
