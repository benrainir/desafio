package com.benrai.poc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benrai.poc.entities.ProductCount;

@Repository
public interface ProductCountRepository extends JpaRepository<ProductCount, Long> {
    ProductCount findByProductIdAndBoxIdAndApartmentId(Long productId, Long boxId, Long apartmentId);

    void deleteByApartmentId(Long apartmentId);
}
