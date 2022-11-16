package com.benrai.poc.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benrai.poc.entities.Edifice;

@Repository
public interface EdificeRepository extends JpaRepository<Edifice, Long> {
    List<Edifice> findByStreetId(Long streetId);
}
