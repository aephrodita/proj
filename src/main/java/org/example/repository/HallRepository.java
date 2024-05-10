package org.example.repository;

import org.example.entity.Hall;
import org.example.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HallRepository extends JpaRepository<Hall, Long> {
    Hall findById(long hallId);
}
