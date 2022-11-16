package com.benrai.poc.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.benrai.poc.entities.Apartment;

public interface ApartmentRepository extends JpaRepository<Apartment, Long> {
    List<Apartment> findByEdificeId(Long edificeId);
}
