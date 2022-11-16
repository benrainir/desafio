package com.benrai.poc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benrai.poc.entities.Edifice;
import com.benrai.poc.repositories.EdificeRepository;

@Service
public class EdificeService {

    @Autowired
    private EdificeRepository edificeRepository;

    public List<Edifice> getAllEdificesByStreetId(Long streetId) {
        return edificeRepository.findByStreetId(streetId);
    }
}
