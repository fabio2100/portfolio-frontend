import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { LocalService } from '../local.service'
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  loggeado : boolean = false;
  faPlusCircle = faPlusCircle;
  proyectos : any[]=[];

  constructor(private http:HttpClient,private localStore:LocalService) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/proyectos').subscribe(data=>{
      this.proyectos = data;
    })
    if(this.localStore.getItem('userLogin')){
      console.log('logueado true')
      this.loggeado = true;
    }
  }

}
