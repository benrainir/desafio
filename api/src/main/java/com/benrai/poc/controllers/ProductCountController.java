package com.benrai.poc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benrai.poc.dtos.SaveProductCountDTO;
import com.benrai.poc.entities.Apartment;
import com.benrai.poc.entities.ProductCount;
import com.benrai.poc.repositories.ApartmentRepository;
import com.benrai.poc.repositories.ProductCountRepository;

@RestController
@RequestMapping("/product/counts")
@CrossOrigin
public class ProductCountController {

    @Autowired
    private ProductCountRepository productCountRepository;

    @Autowired
    private ApartmentRepository apartmentRepository;

    @PostMapping
    public ResponseEntity<ProductCount> save(@RequestBody ProductCount productCount) {
        try {
            var productCountFromDB = productCountRepository.findByProductIdAndBoxIdAndApartmentId(
                    productCount.getProductId(),
                    productCount.getBoxId(),
                    productCount.getApartmentId());

            if (productCountFromDB != null) {
                productCount.setId(productCountFromDB.getId());
            }

            var apartmentFromDB = apartmentRepository.findById(productCount.getApartmentId());

            if (apartmentFromDB.isPresent()) {
                apartmentFromDB.get().setVisited(true);
                apartmentRepository.save(apartmentFromDB.get());
            }

            return new ResponseEntity<ProductCount>(
                    productCountRepository.save(productCount),
                    HttpStatus.CREATED);

        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
