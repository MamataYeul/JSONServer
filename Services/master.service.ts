import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { Users } from './Users';

@Injectable({
  providedIn: 'root';
});

url:string="https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==";
export class MasterService {

  constructor(private http : HttpClient) { }
  GetChartInfo(){
    return this.http.get("url");
    
  }
}
