package org.example.repository;

import org.example.entity.MyLogger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyLoggerRepository extends JpaRepository<MyLogger, Long> {
}
