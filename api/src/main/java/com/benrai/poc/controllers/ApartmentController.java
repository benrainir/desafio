package com.benrai.poc.controllers;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benrai.poc.entities.Apartment;
import com.benrai.poc.repositories.ApartmentRepository;
import com.benrai.poc.repositories.ProductCountRepository;
import com.benrai.poc.services.ApartmentService;

@RestController
@RequestMapping("/apartments")
@CrossOrigin
public class ApartmentController {

    @Autowired
    private ApartmentService apartmentService;

    @Autowired
    private ApartmentRepository apartmentRepository;

    @Autowired
    private ProductCountRepository productCountRepository;

    @GetMapping
    public List<Apartment> getAllApartments() {
        return apartmentRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Apartment> getApartmentById(@PathVariable("id") Long id) {
        return apartmentRepository.findById(id);
    }

    @PutMapping("/{id}/clean")
    @Transactional
    public ResponseEntity cleanApartment(@PathVariable("id") Long id) {
        try {
            var apartmentFromDB = apartmentRepository.findById(id);

            if (apartmentFromDB.isPresent()) {
                apartmentFromDB.get().setVisited(true);
                apartmentRepository.save(apartmentFromDB.get());
                productCountRepository.deleteByApartmentId(apartmentFromDB.get().getId());
            }

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
