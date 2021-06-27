import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserve } from 'app/reserve/reserve';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';
import { Rate } from './rate';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css' ] 
  


  
  
})
export class RateComponent implements OnInit {
   public  rate: Rate = new Rate()
   public  reserve: Reserve = new Reserve()
  public tittle:string="Califica tu Huesped Guest"
  comentarioGuest: any;
  idGuest: any;
  photoExpGuest: any;
  note: any;
 
  constructor(private service: LoginService, private activatedRoute: ActivatedRoute, private router: Router) { }
  

  ngOnInit(): void {
    this.cargarIdReserve();
    this.cargarIdHouse();
  }


  cargarIdReserve(): void{
    this.activatedRoute.params.subscribe(params =>{
      let idReserve1 = params['idReserve']
    
      if(idReserve1){
        this.rate.idReserve=idReserve1;
       

    
       }

    })
  }   
    
 cargarIdHouse() {
    this.service.getReservebyIdReserve(this.rate.idReserve).subscribe(data => {
      this.reserve=data
      this.rate.idHouse=this.reserve.idHouse
     
    })
  }
   

  calificar(){
   console.log('este es el usuario que califica´'+this.service.user.id)
    this.rate.idGuest=this.service.user.id;
    this.rate.commentGuest=this.comentarioGuest;
    this.rate.photoExp=this.photoExpGuest;
    this.rate.note=this.note

    this.service.saveRatingHouse(this.rate).subscribe(data => {
      this.rate=data

      
    }, error => alert(error));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Calificacion de Casa Host realizada correctamente',
      showConfirmButton: false,
      timer: 1500
    });
    this.service.getReservebyIdReserve(this.rate.idReserve).subscribe(data => {
      console.log(data);})
      this.reserve.notaGuest=this.rate.note
    this.service.updateReserve(this.reserve).subscribe(data => {
      console.log(data);
      this.reserve=data
      console.log("este es la actualizacion de la reserva "+this.reserve)
    })
    this.router.navigate(['/admin/table']);


  }

}
