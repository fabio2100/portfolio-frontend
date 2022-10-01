import { Component } from '@angular/core';
import {globalVariables} from './globalVariables';
import { LocalService } from './local.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = globalVariables.title;
  login=false;
  constructor(private localStore: LocalService) { }
  ngOnInit(): void {
    var loggeado = false;
    if(this.localStore.getItem('userLogin')){
      loggeado = true;
    }
    console.log(loggeado)
  }
  
}
