import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'app/guest/guest';
import { AuthService } from 'app/shared/services/auth.service';
import { LoginService } from 'app/shared/services/login.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTESGUEST: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Bienvenido Portal GUEST',  icon: 'pe-7s-home', class: '' },
    { path: '/admin/user/', title: 'Tu Perfil',  icon:'pe-7s-id', class: '' },
    { path: '/admin/table', title: 'Historial de Viajes como Guest',  icon:'pe-7s-note2', class: '' },
   
];

export const ROUTESHOST: RouteInfo[] = [
  { path: 'house', title: 'Bienvenido Portal HOST',  icon:'pe-7s-id', class: '' },
  { path: '/admin/user/', title: 'Tu Perfil',  icon:'pe-7s-id', class: '' },
  { path: '/admin/typography', title: 'Historial de Reservas como Host',  icon:'pe-7s-news-paper', class: '' },
  //{ path: '/admin/maps', title: 'Ubicación',  icon:'pe-7s-map-marker', class: '' },
  { path: 'house', title: 'Quiero Ofrecer mi casa',  icon:'pe-7s-rocket', class: 'active-pro' },

]

export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Bienvenido Portal FULL    Buscar',  icon: 'pe-7s-home', class: '' },
  { path: '/admin/user/', title: 'Tu Perfil',  icon:'pe-7s-id', class: '' },
  { path: '/admin/table', title: 'Historial de Viajes como Guest',  icon:'pe-7s-note2', class: '' },
  { path: '/admin/typography', title: 'Historial de Reservas como Host',  icon:'pe-7s-news-paper', class: '' },
  { path: '/admin/house', title: 'Quiero Ofrecer mi casa',  icon:'pe-7s-rocket', class: 'active-pro' },
 // { path: '/admin/maps', title: 'Ubicación',  icon:'pe-7s-map-marker', class: '' },

]


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  public  user: Guest = new Guest()
  usuarioLogueado = false;

  constructor(private service: LoginService, public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.usuarioLogueado = this.authService.isLoggedIn('');
    this.authService.changeLoginStatus$.subscribe((loggedStatus: boolean)=>{
      this.usuarioLogueado = loggedStatus;
    })
    
      let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
      this.user=recuperarStorage;
      if(this.user.rol==1){
    this.menuItems = ROUTESGUEST.filter(menuItem => menuItem);
      }
      else if(this.user.rol==2){
        this.menuItems = ROUTESHOST.filter(menuItem => menuItem);
      }
      else{
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      }
  
} 
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  logout(){
    this.authService.logout();
    localStorage.removeItem("datosSesion")
    this.router.navigate(['/guest']);
  }
}
