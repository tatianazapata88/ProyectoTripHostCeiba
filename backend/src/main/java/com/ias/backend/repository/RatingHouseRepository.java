package com.ias.backend.repository;

import com.ias.backend.domain.RatingHouse;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingHouseRepository extends CrudRepository<RatingHouse, Integer>{

    RatingHouse findByidHouse(String idHouse);

    RatingHouse findByidReserve(int idReserve);

    
}
