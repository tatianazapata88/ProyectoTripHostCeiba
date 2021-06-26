import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Guest } from 'app/guest/guest';
import { House } from 'app/house/house';
import { Rate } from 'app/rate/rate';
import { Reserve } from 'app/reserve/reserve';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

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

  getLogin(username, password): Observable <Guest>{
  // this.usernameLogin=usernameLogin;
   //this.password=password;
    
   // return  this.http.get('http://localhost:8080/users/login?username='+usernameLogin+'&password='+password).pipe(map((response)=>response as Guest));
     return  this.http.get <Guest>('http://localhost:8080/users/login/'+username+'/'+password);
   
  }

  getHouse(username): Observable <House>{
   // this.username=username;
   // return  this.http.get<House>('http://localhost:8080/houses/host?username='+username).pipe(map((response)=>response as House));
 
     return  this.http.get<House>('http://localhost:8080/houses/host/'+username).pipe(map((response)=>response as House));
 
   }

   getHousebyId(idHouse): Observable <House>{
   // this.idHouse=idHouse;
    
     return  this.http.get<House>('http://localhost:8080/houses/hostId/'+idHouse);
 
   }

   getRateHouseId(idHouse): Observable <Rate>{
    // this.idHouse=idHouse;
     
      return  this.http.get<Rate>('http://localhost:8080/ratingHouses/rate/'+idHouse);
  
    }
   getUser(username): Observable <Guest>{
    //this.usernameLogin=username;
    
    // return  this.http.get('http://localhost:8080/users/guest/'+username).pipe(map((response)=>response as Guest));
     return  this.http.get<Guest>('http://localhost:8080/users/guest/'+username);
   }

   getReservebyUsernameGuest<Reserve>(usernameGuest): Observable <Reserve>{
    this.usernameLogin=usernameGuest;
    
     return  this.http.get('http://localhost:8080/reserves/historialReserve?usernameGuest='+usernameGuest).pipe(map((response)=>response as Reserve));
 
   }

   getReservebyUsernameHost<Reserve>(usernameHost): Observable <Reserve>{
    this.usernameLogin=usernameHost;
    
     return  this.http.get('http://localhost:8080/reserves/historialReserveHost?usernameHost='+usernameHost).pipe(map((response)=>response as Reserve));
 
   }
   getHouseAvailable(available): Observable <House>{
       
     return  this.http.get<House>('http://localhost:8080/houses/search/'+available);
 
   }

   getHouseByAvailableAndhouseCityAndhouseCountry(available, houseCity, houseCountry): Observable <House>{
    //available=1;
   // this.houseCity=houseCity;
    //this.houseCountry=houseCountry;
    //console.log(houseCity)*/
    
     return  this.http.get<House>('http://localhost:8080/houses/searchCity?available='+available+'&houseCity='+houseCity+'&houseCountry='+houseCountry);
 
   }

   getAllHouses<House>(): Observable <House>{
    
    
     return  this.http.get('http://localhost:8080/houses/search').pipe(map((response)=>response as House));
 
   }
 /*  getHouses<House>(housecity, housecountry, available): Observable <House>{
    this.housecity=housecity;
    this.housecountry=housecountry;
    this.available=available;*/

    
    // return  this.http.get('http://localhost:8080/host?username='+username).pipe(map((response)=>response as House));
 
  // }

  getIdHouse(idHouse){
    this.idHouse=idHouse;

  }

 

  saveUser(usuario: Guest): Observable<Guest>{
    console.log("llega al service:", usuario)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(usuario);
    console.log(headers," ", body)

    return this.http.post<Guest>('http://localhost:8080/users/create', body, {'headers':headers})

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
 