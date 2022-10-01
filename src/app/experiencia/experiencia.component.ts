import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  loggeado : boolean = false;
  faPlusCircle = faPlusCircle;
  constructor(private localStore:LocalService) { }

  ngOnInit(): void {
    if(this.localStore.getItem('userLogin')){
      this.loggeado = true;
    }
    if(this.localStore.getItem('userLogin')){
      this.loggeado = true;
    }
  }

}
