import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'app/guest/guest';
import { House } from 'app/house/house';
import { Rate } from 'app/rate/rate';
import { Reserve } from 'app/reserve/reserve';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  @Output() datos : any;
  public  user: Guest = new Guest()
  public  house:House = new House()
  username: any;
  password: any;
  houseCity: any;
  houseCountry: any;
  available: any;
  name: any;
  idHouse: any;
  usernameLogin: any;

  getLogin(username, password): Observable<Guest> {

    return this.http.get<Guest>('http://localhost:8080/users/login/' + username + '/' + password).pipe(
      catchError(e => {
        this.router.navigate(['/guest']);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario y/o password no válidos!',

        })
        return throwError(e);
      })
    )

  }

  getHouse(username): Observable<House> {

    return this.http.get<House>('http://localhost:8080/houses/host/' + username).pipe(map((response) => response as House));

  }

  getHousebyId(idHouse): Observable<House> {


    return this.http.get<House>('http://localhost:8080/houses/hostId/' + idHouse);

  }

  getRateReserveId(idReserve): Observable<Rate> {


    return this.http.get<Rate>('http://localhost:8080/ratingHouses/rate/' + idReserve);

  }
  getUser(username): Observable<Guest> {

    return this.http.get<Guest>('http://localhost:8080/users/guest/' + username);
  }

  getReservebyIdReserve(idReserve): Observable<Reserve> {

    return this.http.get<Reserve>('http://localhost:8080/reserves/reserveId/' + idReserve);

  }

  getReservebyUsernameGuest<Reserve>(usernameGuest): Observable<Reserve> {
    this.usernameLogin = usernameGuest;

    return this.http.get('http://localhost:8080/reserves/historialReserve?usernameGuest=' + usernameGuest).pipe(map((response) => response as Reserve));

  }

  getReservebyUsernameHost<Reserve>(usernameHost): Observable<Reserve> {
    this.usernameLogin = usernameHost;

    return this.http.get('http://localhost:8080/reserves/historialReserveHost?usernameHost=' + usernameHost).pipe(map((response) => response as Reserve));

  }

  getHouseAvailable(available): Observable<House> {

    return this.http.get<House>('http://localhost:8080/houses/search/' + available);

  }

  getHouseByAvailableAndhouseCityAndhouseCountry(available, houseCity, houseCountry): Observable<House> {

    return this.http.get<House>('http://localhost:8080/houses/searchCity?available=' + available + '&houseCity=' + houseCity + '&houseCountry=' + houseCountry);

  }

   getAllHouses<House>(): Observable <House>{
    
    
     return  this.http.get('http://localhost:8080/houses/search').pipe(map((response)=>response as House));
 
   }

  getIdHouse(idHouse){
    this.idHouse=idHouse;

  }

 

  saveUser(usuario: Guest): Observable<Guest>{
    console.log("llega al service:", usuario)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(usuario);
    console.log(headers," ", body)

    return this.http.post<Guest>('http://localhost:8080/users/create', body, {'headers':headers}).pipe(
      catchError(e=>{
        this.router.navigate(['/sign']);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario ya existe y/o diligencie todos los campos!',

        })
        return throwError(e);
      })
    )
 }

  updateUser(usuario: Guest): Observable<any>{
    console.log("llega al service:", usuario)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(usuario);
    console.log(headers," ", body)

    return this.http.put('http://localhost:8080/users/update', body, {'headers':headers})

  }

  updateHouse(house: House): Observable<House>{
    console.log("llega al service:", house)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(house);
    console.log(headers," ", body)

    return this.http.put<House>('http://localhost:8080/houses/updateHouse', body, {'headers':headers})

  }

  updateReserve(reserve: Reserve): Observable<Reserve>{
    console.log("llega al service:", reserve)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(reserve);
    console.log(headers," ", body)

    return this.http.put<Reserve>('http://localhost:8080/reserves/update', body, {'headers':headers})

  }

  saveHouse(house: House): Observable<House>{
    console.log("llega al service:", house)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(house);
    console.log(headers," ", body)

    return this.http.post<House>('http://localhost:8080/houses/public', body, {'headers':headers})

  }

  saveRatingHouse(rate: Rate): Observable<Rate>{
    console.log("llega al service:", rate)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(rate);
    console.log(headers," ", body)

    return this.http.post<Rate>('http://localhost:8080/ratingHouses/rate', body, {'headers':headers})

  }
  
  saveReserve(reserva: Reserve): Observable<any>{
    console.log("llega al service:", reserva)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(reserva);
    console.log(headers," ", body)

    return this.http.post('http://localhost:8080/reserves/reserveHouse', body, {'headers':headers})

  }

  eliminarReserva(idReserve): Observable<Reserve>{
    return  this.http.delete<Reserve>('http://localhost:8080/reserves/eliminar/'+idReserve);
  }

}
 