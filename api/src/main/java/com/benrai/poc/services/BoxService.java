package com.benrai.poc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benrai.poc.entities.Box;
import com.benrai.poc.repositories.BoxRepository;

@Service
public class BoxService {
    @Autowired
    private BoxRepository boxRepository;

    // public List<Box> getAllBoxesByApartmentId(Long apartmentId) {
    // return boxRepository.findByApartmentId(apartmentId);
    // }
}
