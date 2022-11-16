package com.benrai.poc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benrai.poc.entities.Street;
import com.benrai.poc.repositories.StreetRepository;

@Service
public class StreetService {
    @Autowired
    private StreetRepository streetRepository;

    public List<Street> getAllStreetsByDistrictId(Long districtId) {
        return streetRepository.findByDistrictId(districtId);
    }
}
