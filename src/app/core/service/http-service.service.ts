import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { colorList } from 'src/app/core/model/colorlist.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  private readonly colorAPIURL:string = environment.colorApi_URL


  getAllColors(){
    return this.http.get<{colors: colorList[]}>(`${this.colorAPIURL}`)
  }
  getMatchedColor(data:string){
    return this.http.get<{colors: colorList[]}>(`${this.colorAPIURL}names/${data}`)
  }
}
