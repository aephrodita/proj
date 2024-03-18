package org.example.repository;

import org.example.entity.Cinema;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepostitory extends JpaRepository<Cinema, Long> {
}
