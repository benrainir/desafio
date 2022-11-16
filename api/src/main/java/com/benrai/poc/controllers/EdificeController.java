package com.benrai.poc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benrai.poc.entities.Apartment;
import com.benrai.poc.entities.Edifice;
import com.benrai.poc.repositories.EdificeRepository;
import com.benrai.poc.services.ApartmentService;

@RestController
@RequestMapping("/edifices")
@CrossOrigin
public class EdificeController {

    @Autowired
    private ApartmentService apartmentService;

    @Autowired
    private EdificeRepository edificeRepository;

    @GetMapping
    public List<Edifice> getAllDefices() {
        return edificeRepository.findAll();
    }

    @GetMapping("/{id}/apartments")
    public List<Apartment> getAllApartmentsByEdificeId(@PathVariable("id") Long id) {
        return apartmentService.getAllApartmentByEdificeId(id);
    }
}
