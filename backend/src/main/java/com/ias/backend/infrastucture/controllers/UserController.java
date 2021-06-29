package com.ias.backend.infrastucture.controllers;

import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import com.ias.backend.domain.User;
import com.ias.backend.repository.UserRepository;
import org.springframework.http.MediaType;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value="/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {
    
    private UserRepository userRepository;

    public UserController(UserRepository _userRepository){
        this.userRepository = _userRepository;
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody User user){
        User userNew = null;
        Map<String, Object> response = new HashMap<>();

        try{
            userNew = userRepository.save(user);
        } catch(DataAccessException e){
            response.put("mensaje", "Error al realizar la creacion del cliente en la base de datos");
            response.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El cliente ha sido creado con exito");
        response.put("user", userNew);
       

        
      
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }
    

    @GetMapping
     public ResponseEntity<Iterable<User>> getAllUser(){
        return new ResponseEntity<Iterable<User>>(userRepository.findAll(), HttpStatus.ACCEPTED);
    }
  
    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<User  >(userRepository.save(user), HttpStatus.ACCEPTED);
    }

    @GetMapping("/guest/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        return new ResponseEntity<User>(userRepository.findByUsername(username), HttpStatus.ACCEPTED);
    }
 // holi
    @GetMapping("/login/{username}/{password}")
    public ResponseEntity<?> show(@PathVariable String username, @PathVariable String password) {

        User user = null;
        Map<String, Object> response = new HashMap<>();

        try{
            user = userRepository.findByUsernameAndPassword(username, password);
        } catch(DataAccessException e){
            response.put("mensaje", "Error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if(user == null){
            response.put("mensaje", "El usuario ".concat(username.toString().concat(" no existe o no es la contraseña correcta!")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        
        return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
    }
    
}