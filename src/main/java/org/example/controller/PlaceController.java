package org.example.controller;

import lombok.AllArgsConstructor;
import org.example.dto.PlaceDto;
import org.example.entity.Place;
import org.example.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
public class PlaceController {
    private final UserService userService;
    private final MovieService movieService;
    private final TicketService ticketService;
    private final CinemaService cinemaService;
    private final HallService hallService;
    private final SeanceService seanceService;
    private final PlaceService placeService;

    // Список всех мест
    @GetMapping("/place")
    public List<Place> getAllPlace() {
        // Возвращает список всех мест
        return placeService.getAllPlace();
    }

    // Получение списка мест в конкретном зале по его ID
    @GetMapping("/place/{hallId}")
    public List<Place> getHallPlace(@PathVariable long hallId) {
        // Возвращает список мест для зала с заданным ID
        return placeService.findPlacesInHall(hallId);
    }

    // Добавление новых мест в зал (доступно только для администраторов)
    @PostMapping("/admin/placehall/{hallId}")
    public String addPlace(@PathVariable long hallId) {
        // Добавляет места в зал с заданным ID и возвращает сообщение о результате
        return placeService.addPlaceHall(hallId);
    }
}
