package com.benrai.poc.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benrai.poc.entities.Street;

@Repository
public interface StreetRepository extends JpaRepository<Street, Long> {
    List<Street> findByDistrictId(Long districtId);
}
