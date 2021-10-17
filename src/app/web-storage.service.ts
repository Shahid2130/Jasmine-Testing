import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(private http:HttpClient) { }

  getAllDetails():Observable<any>{
    return this.http.get('http://localhost:3000/employees')
  }
 
  getSingleDetails(id:number):Observable<any>{
    return this.http.get(`http://localhost:3000/employees${id}`)
  }
  addNewDetails(data:object):Observable<any>{
    return this.http.post(' http://localhost:3000/employees',data)
  }

  updateDetails(id:number,data:object):Observable<any>{
    return this.http.put(` http://localhost:3000/employees/${id}`,data)
  }

  deleteDetail(id:number):Observable<any>{
    return this.http.delete(` http://localhost:3000/employees/${id}`)
  }



  
}
