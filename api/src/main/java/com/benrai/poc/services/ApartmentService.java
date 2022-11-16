package com.benrai.poc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benrai.poc.entities.Apartment;
import com.benrai.poc.repositories.ApartmentRepository;

@Service
public class ApartmentService {

    @Autowired
    private ApartmentRepository apartmentRepository;

    public List<Apartment> getAllApartmentByEdificeId(Long edificeId) {
        return apartmentRepository.findByEdificeId(edificeId);
    }
}
