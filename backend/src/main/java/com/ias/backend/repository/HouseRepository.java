package com.ias.backend.repository;

import com.ias.backend.domain.House;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HouseRepository extends CrudRepository<House, Integer>{

    

    House findByUsername(String username);
    House findById(int idHouse);
    Iterable<House> findByAvailable(int available);
    Iterable<House> findByAvailableAndHouseCityOrHouseCountry(int available, String houseCity, String houseCountry);
    
  
    
   

}
    

