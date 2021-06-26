import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbarinex',
  templateUrl: './navbarinex.component.html',
  styleUrls: ['./navbarinex.component.css']
})
export class NavbarinexComponent implements OnInit {

  usuarioLogueado = false;


  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.usuarioLogueado = this.authService.isLoggedIn('');
    this.authService.changeLoginStatus$.subscribe((loggedStatus: boolean)=>{
      this.usuarioLogueado = loggedStatus;
    })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/guest']);
  }

}
