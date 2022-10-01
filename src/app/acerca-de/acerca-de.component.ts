import { Component, OnInit } from '@angular/core';
import {Comentario} from '../prueba'
import { Observable } from 'rxjs';
import { LocalService } from '../local.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
 
})
export class AcercaDeComponent implements OnInit {

  loggeado:boolean=false;
  comentarios: any;
  faPlusCircle = faPlusCircle;
  constructor(private localStore:LocalService) { 
  
  }

  

  ngOnInit(): void {
    if(this.localStore.getItem('userLogin')){
      this.loggeado = true;
    }
  }

}
