import { Component, OnInit } from '@angular/core';
import { colorList } from '../core/model/colorlist.model';
import { HttpServiceService } from '../core/service/http-service.service';

@Component({
  selector: 'app-find-colors',
  templateUrl: './find-colors.component.html',
  styleUrls: ['./find-colors.component.css']
})
export class FindColorsComponent implements OnInit {

  constructor(private http:HttpServiceService) { }
  colorList: colorList[] = [];
  filterColor:any;

  ngOnInit(){
  

  }

  getAllColors(){
    this.http.getAllColors().subscribe(res =>{
    this.colorList = res.colors
  })
  }
  getMatchedData(){
    this.http.getMatchedColor(this.filterColor).subscribe(res=>{
        this.colorList = res.colors
    })
  }

}
