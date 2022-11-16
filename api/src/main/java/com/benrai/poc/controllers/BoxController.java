package com.benrai.poc.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benrai.poc.entities.Box;
import com.benrai.poc.repositories.BoxRepository;
import com.benrai.poc.services.BoxService;

@RestController
@CrossOrigin
@RequestMapping("/boxes")
public class BoxController {

    @Autowired
    private BoxRepository boxRepository;

    @Autowired
    private BoxService boxService;

    @GetMapping
    public List<Box> getAll() {
        return boxRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Box> getFindById(@PathVariable("id") Long id) {
        return boxRepository.findById(id);
    }
}
