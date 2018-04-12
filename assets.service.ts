import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AssetsService {
  constructor(private http: HttpClient) { }

  getAssets() {
  	return this.http.get("http://localhost:5000/api/getassets");
  }

   deleteAssets(assets) {
    let body = JSON.stringify(assets);
    console.log(body);
  	return this.http.post("http://localhost:5000/api/deleteassets", body, httpOptions);
  }

   addAssets(assets) {
    let body = JSON.stringify(assets);
    console.log(body);
  	return this.http.post("http://localhost:5000/api/addassets", body, httpOptions);
  }

}