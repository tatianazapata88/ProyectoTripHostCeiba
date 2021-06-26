package com.ias.backend.infrastucture.controllers;
import com.ias.backend.domain.Reserve;
import com.ias.backend.repository.ReserveRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;


@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value="/reserves", produces = MediaType.APPLICATION_JSON_VALUE)
public class ReserveController {
    
    private  ReserveRepository reserveRepository;

    public ReserveController (ReserveRepository _reserveRepository){
        this.reserveRepository = _reserveRepository;
    }

    
   // @PostMapping ("/save")
    @PostMapping("/reserveHouse")

      public ResponseEntity<Reserve> saveReserve(@RequestBody Reserve reserve){
        return new ResponseEntity<Reserve>(reserveRepository.save(reserve), HttpStatus.CREATED);

    }

    //@GetMapping("/list")
    @GetMapping(value="/listReserve")

     public ResponseEntity<Iterable<Reserve>> getAllReserve(){
        return new ResponseEntity<Iterable<Reserve>>(reserveRepository.findAll(), HttpStatus.ACCEPTED);
    }
    
    @GetMapping(value="/historialReserve")
    
     public ResponseEntity<Iterable<Reserve>> getReservebyUsername(String usernameGuest){
        return new ResponseEntity<Iterable<Reserve>>(reserveRepository.findByUsernameGuest(usernameGuest), HttpStatus.ACCEPTED);
    
    }

    @GetMapping(value="/historialReserveHost")
    
    public ResponseEntity<Iterable<Reserve>> getReservebyUsernameHost(String usernameHost){
       return new ResponseEntity<Iterable<Reserve>>(reserveRepository.findByUsernameHost(usernameHost), HttpStatus.ACCEPTED);
   
   }

   @DeleteMapping(value="/eliminar/{idReserve}")
   @ResponseStatus(HttpStatus.NO_CONTENT)
    
    public void deleteById(@PathVariable int idReserve){
      reserveRepository.deleteById(idReserve);
  
  }
}
