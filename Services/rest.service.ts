import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http : HttpClient) { }
  url:string="https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==";

//   getUsers()
// {
//     return this._http.get<Users[]>(this.url);
// }

}
