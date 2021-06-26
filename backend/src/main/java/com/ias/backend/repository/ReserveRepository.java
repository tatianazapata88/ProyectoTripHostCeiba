package com.ias.backend.repository;

import com.ias.backend.domain.Reserve;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReserveRepository extends CrudRepository<Reserve, Integer>{

    Iterable<Reserve> findByUsernameGuest(String usernameGuest);

    Iterable<Reserve> findByUsernameHost(String usernameHost);



   
}
