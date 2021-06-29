import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';
import { Guest } from './guest';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';



@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  public user: Guest = new Guest()


  constructor(private router: Router, private service: LoginService, private authService: AuthService) { }

  routeRedirect = '';

  ngOnInit() {
  }

  login() {
    this.service.getLogin(this.user.username, this.user.password).subscribe(data => {
      this.user = data;
      localStorage.setItem("datosSesion", JSON.stringify(data));
      this.authService.login();
      this.routeRedirect = this.authService.urlUsuarioIntentAcceder;
      this.authService.urlUsuarioIntentAcceder = '';
      this.router.navigate([this.routeRedirect]);

     
        this.router.navigate(['/admin/user']);
    
    })

  }
}



