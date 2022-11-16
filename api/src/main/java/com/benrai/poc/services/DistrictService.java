package com.benrai.poc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benrai.poc.entities.District;
import com.benrai.poc.repositories.DistrictRepository;

@Service
public class DistrictService {

    @Autowired
    private DistrictRepository districtRepository;

    public List<District> getAllDistrictsByCityId(Long cityId) {
        return districtRepository.findByCityId(cityId);
    }
}
