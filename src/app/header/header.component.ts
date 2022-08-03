import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  botonEditar(){
    console.log('editar apretado')
  }

  linkToFacebook(){
    window.open('https://www.facebook.com/fabio21')
  }

  linkToInstagram(){
    window.open('https://www.instagram.com/fabios15')
  }

  linkToLinkedin(){
    window.open('https://www.linkedin.com/in/squizzato-fabio/')
  }

}
