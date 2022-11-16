package com.benrai.poc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.benrai.poc.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
