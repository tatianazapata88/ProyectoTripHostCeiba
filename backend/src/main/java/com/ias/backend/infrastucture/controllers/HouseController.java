package com.ias.backend.infrastucture.controllers;

import com.ias.backend.domain.House;
import com.ias.backend.repository.HouseRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value="/houses", produces = MediaType.APPLICATION_JSON_VALUE)
public class HouseController {
    
    private HouseRepository houseRepository;

        public HouseController(HouseRepository _houseRepository){
        this.houseRepository = _houseRepository;
    }

    @PostMapping("/public")
    public ResponseEntity<House> saveHouse(@RequestBody House house){
        return new ResponseEntity<House>(houseRepository.save(house), HttpStatus.CREATED);
    }

    @GetMapping(value="/search")
    public ResponseEntity<Iterable<House>> getAllHouses(){
        return new ResponseEntity<Iterable<House>>(houseRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/search/{available}")
    public ResponseEntity<Iterable<House>> search(@PathVariable int available){
        return new ResponseEntity<Iterable<House>>(houseRepository.findByAvailable(available), HttpStatus.ACCEPTED);
    }

    @GetMapping("/searchCity")
    public ResponseEntity<Iterable<House>> getHouseCityByAvailbleAndHouseCityAndHouseCountry(int available, String houseCity,  String houseCountry){
        return new ResponseEntity<Iterable<House>>(houseRepository.findByAvailableAndHouseCityOrHouseCountry(available, houseCity, houseCountry), HttpStatus.ACCEPTED);
    }
    @PutMapping("/updateHouse") 
    public ResponseEntity<House> updateHouse(@RequestBody House house){
        return new ResponseEntity<House  >(houseRepository.save(house), HttpStatus.ACCEPTED);
    }

   @GetMapping("/host/{username}")
    public ResponseEntity<House> getHouseByUsername(@PathVariable String username) {
        return new ResponseEntity<House>(houseRepository.findByUsername(username), HttpStatus.ACCEPTED);
    }

    @GetMapping("/hostId/{idHouse}")
     public ResponseEntity<House> getHouseById(@PathVariable int idHouse) {
         return new ResponseEntity<House>(houseRepository.findById(idHouse), HttpStatus.ACCEPTED);
     }

   /*@GetMapping
    @RequestMapping("/search")
      
    public ResponseEntity<Iterable<House>> getHouses(){
        return new ResponseEntity<Iterable<House>>(houseRepository.findAll(), HttpStatus.ACCEPTED);
    }*/


 // holi
  /*  @GetMapping
    @RequestMapping("/login")
    public ResponseEntity<User> getUserByUsernameAndPasword(String username,String password) {
        
        return new ResponseEntity<User>(userRepository.findByUsernameAndPassword(username,password), HttpStatus.ACCEPTED);
    }
*/    
}
