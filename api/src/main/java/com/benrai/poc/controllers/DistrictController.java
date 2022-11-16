package com.benrai.poc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benrai.poc.entities.District;
import com.benrai.poc.entities.Street;
import com.benrai.poc.repositories.DistrictRepository;
import com.benrai.poc.services.StreetService;

@RestController
@RequestMapping("/districts")
@CrossOrigin
public class DistrictController {

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private StreetService streetService;

    @GetMapping
    public List<District> getAllDistricts() {
        return districtRepository.findAll();
    }

    @GetMapping("/{id}/streets")
    public List<Street> getAllStreetsByDistrictId(@PathVariable("id") Long id) {
        return streetService.getAllStreetsByDistrictId(id);
    }
}
