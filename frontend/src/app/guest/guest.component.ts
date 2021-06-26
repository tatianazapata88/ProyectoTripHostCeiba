import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';
import { Guest } from './guest';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'app/shared/services/auth.service';
import { isEmptyObject } from 'jquery';

declare var $: any
@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  //user: any;
  public  user: Guest = new Guest()
  username: any;
  password: any;
  showResult: boolean;
  respuesta: any;
  rol:  any;

  constructor(private router: Router, private service: LoginService, private authService: AuthService) { }

  routeRedirect = '';

  ngOnInit(): void {
    this.showResult = false;
  }

  login() {
    //let username = this.user.username;
    //let password = this.user.password;
     
    //console.log(username);
    //console.log(password);

    this.service.getLogin(this.user.username, this.user.password).subscribe(data => {
      this.user=data; 
     
       console.log('esta es la resouesta login'+this.user.rol)
      if (!this.user) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Intentalo de nuevo o registrate!',

        })
      }
      else {
        
        this.authService.login();
        this.routeRedirect = this.authService.urlUsuarioIntentAcceder;
        this.authService.urlUsuarioIntentAcceder = '';
        this.router.navigate([this.routeRedirect]);
     
        
        //console.log('posicion de data'+this.respuesta.rol)
        //if(data[4]===2){
         // console.log('este es lo que llega de back'+this.respuesta);
        if(this.user.rol==2){
          console.log('estos son los datos usuaruio'+this.user)
         this.service.user=this.user
         console.log('estos son los datos del user en service'+this.service.user)
         this.router.navigate(['/admin/house']);
          

        
      
         }
       // 
        else{
          console.log('estos son los datos usuaruio'+this.user)
          this.service.user=this.user
          console.log('estos son los datos del user en service'+this.service.user)
        this.router.navigate(['/admin/dashboard']);
          
        }
      }

    })

    }
   
  }

  


