package com.benrai.poc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benrai.poc.entities.Edifice;
import com.benrai.poc.entities.Street;
import com.benrai.poc.repositories.StreetRepository;
import com.benrai.poc.services.EdificeService;

@RestController
@RequestMapping("/streets")
@CrossOrigin
public class StreetController {

    @Autowired
    public EdificeService edificieService;

    @Autowired
    public StreetRepository streetRepository;

    @GetMapping
    public List<Street> getAllStreets() {
        return streetRepository.findAll();
    }

    @GetMapping("/{id}/edifices")
    public List<Edifice> getAllEdificesByStreetId(@PathVariable("id") Long id) {
        return edificieService.getAllEdificesByStreetId(id);
    }
}
