package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.entity.MyLogger;
import org.example.repository.MyLoggerRepository;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MyLoggerService {
    private final MyLoggerRepository repository;

    public MyLogger log(MyLogger log) {
        return repository.save(log);
    }
}
