package com.benrai.poc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benrai.poc.entities.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
}
