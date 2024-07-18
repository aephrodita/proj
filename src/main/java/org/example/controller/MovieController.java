package org.example.controller;

import lombok.AllArgsConstructor;
import org.example.aspect.ToLogOurApp;
import org.example.dto.MovieDto;
import org.example.entity.Movie;
import org.example.entity.Seance;
import org.example.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
public class MovieController {
    private final UserService userService;
    private final MovieService movieService;
    private final TicketService ticketService;
    private final CinemaService cinemaService;
    private final HallService hallService;
    private final SeanceService seanceService;
    private final PlaceService placeService;

    // Получение информации о конкретном фильме по его ID
    @GetMapping("/movie/{movieId}")
    public Movie getMovie(@PathVariable long movieId) {
        // Возвращает информацию о фильме с заданным ID
        return movieService.getOneMovie(movieId);
    }

    // Добавление нового фильма (доступно только для администраторов)
    @PostMapping("/admin/movie")
    @ToLogOurApp
    public String addMovie(@RequestBody MovieDto movieDto) {
        // Добавляет новый фильм и возвращает сообщение о результате
        return movieService.addMovie(movieDto);
    }

    // Список всех фильмов
    @GetMapping("/movie")
    public List<Movie> getAllMovies() {
        // Возвращает список всех фильмов
        return movieService.getAllMovie();
    }

    // Обновление информации о существующем фильме по его ID (доступно только для администраторов)
    @PutMapping("/admin/movie/{movieId}/edit")
    @ToLogOurApp
    public String updateMovie(@PathVariable long movieId, @RequestBody MovieDto movieDto) {
        // Обновляет информацию о фильме с заданным ID и возвращает сообщение о результате
        return movieService.updateMovie(movieId, movieDto);
    }

    // Получение списка сеансов для конкретного фильма по его ID
    @GetMapping("/movie/seance/{movieId}")
    public List<Seance> getSeanceByMovieId(@PathVariable long movieId) {
        // Возвращает список сеансов для фильма с заданным ID
        return seanceService.findSeanceByMovieId(movieId);
    }

    // Удаление фильма по его ID (доступно только для администраторов)
    @DeleteMapping("/admin/movie/{movieId}")
    @ToLogOurApp
    public String deleteMovie(@PathVariable long movieId) {
        // Удаляет фильм с заданным ID и возвращает сообщение о результате
        return movieService.deleteMovie(movieId);
    }
}
