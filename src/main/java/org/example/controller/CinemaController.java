package org.example.controller;

import lombok.AllArgsConstructor;
import org.example.aspect.ToLogOurApp;
import org.example.dto.CinemaDto;
import org.example.dto.MovieDto;
import org.example.entity.Cinema;
import org.example.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
public class CinemaController {
    private final UserService userService;
    private final MovieService movieService;
    private final TicketService ticketService;
    private final CinemaService cinemaService;
    private final HallService hallService;
    private final SeanceService seanceService;
    private final PlaceService placeService;

    // Список всех кинотеатров
    @GetMapping("/cinema")
    public List<Cinema> getAllCinema() {
        // Возвращает список всех кинотеатров
        return cinemaService.getAllCinema();
    }

    // Получение информации о конкретном кинотеатре по его ID
    @GetMapping("/cinema/{cinemaId}")
    public Cinema getCinema(@PathVariable long cinemaId) {
        // Возвращает информацию о кинотеатре с заданным ID
        return cinemaService.getOneCinema(cinemaId);
    }

    // Добавление нового кинотеатра (доступно только для администраторов)
    @PostMapping("/admin/cinema")
    @ToLogOurApp
    public String addCinema(@RequestBody CinemaDto cinemaDto) {
        // Добавляет новый кинотеатр и возвращает сообщение о результате
        return cinemaService.addCinema(cinemaDto);
    }

    // Обновление информации о существующем кинотеатре по его ID (доступно только для администраторов)
    @PutMapping("/admin/cinema/{cinemaId}/edit")
    @ToLogOurApp
    public String updateCinema(@PathVariable long cinemaId, @RequestBody CinemaDto cinemaDto) {
        // Обновляет информацию о кинотеатре с заданным ID и возвращает сообщение о результате
        return cinemaService.updateCinema(cinemaId, cinemaDto);
    }

    // Удаление кинотеатра по его ID (доступно только для администраторов)
    @DeleteMapping("/admin/cinema/{cinemaId}")
    @ToLogOurApp
    public String deleteCinema(@PathVariable long cinemaId) {
        // Удаляет кинотеатр с заданным ID и возвращает сообщение о результате
        return cinemaService.deleteCinema(cinemaId);
    }
}

