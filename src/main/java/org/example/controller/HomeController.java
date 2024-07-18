package org.example.controller;

import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.example.aspect.ToLogOurApp;
import org.example.dto.*;
import org.example.entity.*;
import org.example.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
public class HomeController {
    // Сервисы для управления пользователями, фильмами, билетами, кинотеатрами, залами, сеансами и местами
    private final UserService userService;
    private final MovieService movieService;
    private final TicketService ticketService;
    private final CinemaService cinemaService;
    private final HallService hallService;
    private final SeanceService seanceService;
    private final PlaceService placeService;

    // Пример эндпоинта для администратора
    @GetMapping("/admin")
    @Operation(summary = "Доступен только авторизованным пользователям с ролью ADMIN")
    @PreAuthorize("hasRole('ADMIN')")
    public String exampleAdmin() {
        // Возвращает приветственное сообщение для администратора
        return "Hello, admin!";
    }

    // Получение списка всех пользователей (доступно только для администраторов)
    @GetMapping("/admin/user")
    public List<User> getAllUsers() {
        // Возвращает список всех пользователей
        return userService.getAllUser();
    }

    // Получение списка билетов, купленных пользователем по его ID
    @GetMapping("/user/ticket/{userId}")
    public List<Ticket> getTicketByUserId(@PathVariable long userId) {
        // Возвращает список билетов для пользователя с заданным ID
        return ticketService.findTicketByUserId(userId);
    }
}
