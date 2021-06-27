package com.ias.backend.infrastucture.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ias.backend.domain.RatingHouse;
import com.ias.backend.repository.RatingHouseRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value="/ratingHouses", produces = MediaType.APPLICATION_JSON_VALUE)

public class RatingHouseController {
    
    private  RatingHouseRepository ratingHouseRepository;

    public RatingHouseController (RatingHouseRepository _ratingHouseRepository){
        this.ratingHouseRepository = _ratingHouseRepository;
    }

    @PostMapping("/rate")

    public ResponseEntity<RatingHouse> saveRatingHouse(@RequestBody RatingHouse ratingHouse){
      return new ResponseEntity<RatingHouse>(ratingHouseRepository.save(ratingHouse), HttpStatus.CREATED);

  }

  @GetMapping("/rate/{idReserve}")
  public ResponseEntity<RatingHouse> getRateByidHouse(@PathVariable int idReserve) {
      return new ResponseEntity<RatingHouse>(ratingHouseRepository.findByidReserve(idReserve), HttpStatus.ACCEPTED);
  }
}
