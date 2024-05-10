package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.CustomException;
import org.example.entity.Seance;
import org.example.entity.Ticket;
import org.example.entity.User;
import org.example.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository repository;

    public User save(User user) {
        return repository.save(user);
    }

    public User create(User user) {
        if (repository.existsByUsername(user.getUsername())) {
            // Заменить на свои исключения
            throw new CustomException("Пользователь с таким именем уже существует", 400);
        }

        if (repository.existsByEmail(user.getEmail())) {
            throw new CustomException("Пользователь с таким email уже существует", 400);
        }

        return save(user);
    }

    public User getByUsername(String username) {
        return repository.findByUsername(username)
                .orElseThrow(() -> new CustomException("Пользователь не найдет", 400));
    }

    public UserDetailsService userDetailsService() {
        return this::getByUsername;
    }

    public User getCurrentUser() {
        // Получение имени пользователя из контекста Spring Security
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        return getByUsername(username);
    }

    @Deprecated
    public void getAdmin() {
        var user = getCurrentUser();
        user.setRole(User.Role.ROLE_ADMIN);
        save(user);
    }

    public List<User> getAllUser(){
        return repository.findAll();
    }

    public User getUserById(Long id){
        return repository.getById(id);
    }
}
