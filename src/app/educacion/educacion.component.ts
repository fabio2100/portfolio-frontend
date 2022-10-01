import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  loggeado : boolean = false;
  faPlusCircle = faPlusCircle;
  constructor(private localStore:LocalService) { }

  ngOnInit(): void {
    if(this.localStore.getItem('userLogin')){
      this.loggeado = true;
    }
  }

}
