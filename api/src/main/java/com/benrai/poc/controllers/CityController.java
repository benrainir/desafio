package com.benrai.poc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benrai.poc.entities.*;
import com.benrai.poc.services.CityService;
import com.benrai.poc.services.DistrictService;

@RestController
@RequestMapping("/cities")
@CrossOrigin
public class CityController {

    @Autowired
    private CityService cityService;

    @Autowired
    private DistrictService districtService;

    @GetMapping
    public List<City> getAllCities() {
        return cityService.getAllCities();
    }

    @GetMapping("/{id}/districts")
    public List<District> getAllDistrictsByCityId(@PathVariable("id") Long id) {
        return districtService.getAllDistrictsByCityId(id);
    }
}
