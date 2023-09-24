import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   
  
  //json-server --watch db.json

  apiUrl='http://localhost:3000/optica';
  apiUrl2='http://localhost:3000/user';
  constructor(private _http:HttpClient,private http: HttpClient) { }


     // Get Method For All list
     getList()
     {
       return this._http.get<any>("http://localhost:3000/optica").pipe(map((res:any)=> {
         return res
       }))
     }


     post(data:any)
     {
       return this._http.post<any>("http://localhost:3000/optica",data).pipe(map((res:any)=> {
         return res
       }))
     }


       //Get Method by id
   getbyid(id:any):Observable<any>
   {
     let ids=id;
     return this._http.get(`${this.apiUrl}/${ids}`);
      
     }
   


   // Put Method For Update 
   put(data:any, id:any)
   {
   return this._http.put<any>("http://localhost:3000/optica/" + id,data).pipe(map((res:any)=> {
    return res
   }))
    }

      // Delete Method For Update 
  delete(id:any){
   
    return this._http.delete(`${this.apiUrl}/${id}`).pipe(map((res:any)=> {
      return res
     }))
    }


      // Delete ALL 
  deleteAllOptica():Observable<any>{
    return this._http.delete("http://localhost:3000/optica").pipe(map((res:any)=> {
      return res
     }))
    }

    // Get Method For All user
    getuser()
    {
      return this._http.get<any>("http://localhost:3000/user").pipe(map((res:any)=> {
        return res
      }))
    }

     // Put Method For Update user
   putUser(data:any, id:any)
   {
   return this._http.put<any>("http://localhost:3000/user/" + id,data).pipe(map((res:any)=> {
    return res
   }))
    }


    

      

}
    
       

    

   
  
