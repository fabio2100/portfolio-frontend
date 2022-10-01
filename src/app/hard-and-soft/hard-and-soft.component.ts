import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {LocalService} from '../local.service'

@Component({
  selector: 'app-hard-and-soft',
  templateUrl: './hard-and-soft.component.html',
  styleUrls: ['./hard-and-soft.component.css']
})
export class HardAndSoftComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  skills : any[]=[];
  loggeado : boolean = false;
  constructor(private http: HttpClient, private localStore:LocalService) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/skills').subscribe(data=>{
      this.skills = data;
    });
    if(this.localStore.getItem('userLogin')){
      this.loggeado = true;
    }
  }

}
