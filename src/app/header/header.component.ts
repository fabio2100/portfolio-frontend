import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {globalVariables} from '../globalVariables'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForm!: FormGroup;
  correcto = "";
  loginCorrecto = false;
  loginIncorrecto = false;
  noVisible = true;
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
    get emailField(): any {
      return this.loginForm.get('email');
    }
    get passwordField(): any {
      return this.loginForm.get('password');
    }
    loginFormSubmit(): void {
      const formData = new FormData();
      formData.append("username",this.loginForm.value.email)
      formData.append("password",this.loginForm.value.password)
      this.http.post<any>(`${globalVariables.url}/usuarios`,formData).subscribe(data=>{
        if(data.msg=='Ingreso correcto'){
          this.correcto = "correcto";
          this.loginCorrecto = true;
          this.loginIncorrecto = false;
          this.noVisible = false;
          this.router.navigate(['home']);
          localStorage.setItem('userLogin',this.loginForm.value.email)
        }else{
          this.correcto = "incorrecto";
          this.loginIncorrecto = true;
          this.loginCorrecto = false;
          this.noVisible = false;
        }
      })  
    
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
