package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.PlaceDto;
import org.example.entity.Place;
import org.example.entity.Hall;
import org.example.repository.PlaceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PlaceService {
    private final PlaceRepository repository;
    private final HallService hallService;

    public String addPlaceHall1(PlaceDto dto){
        Hall hall = hallService.getHallById(dto.getHall());
        for (int i = 0; i < hall.getRow(); i++){
            for (int j = 0; j < hall.getSeat(); j++){
                Place place = new Place();
                place.setX(j);
                place.setY(i);
                place.setZ(1);
                place.setHall(hall);
                repository.save(place);
            }
        }
        return "added";
    }

    public String addPlaceHall2(PlaceDto dto){
        Hall hall = hallService.getHallById(dto.getHall());
        for (int i = 0; i < hall.getRow(); i++){
            for (int j = 0; j < hall.getSeat(); j++){
                Place place = new Place();
                place.setX(j);
                place.setY(i);
                if((j == 0 || j == hall.getSeat()-1) && i != hall.getRow()-1){
                    place.setZ(0);
                }else{
                    place.setZ(1);
                }
                place.setHall(hall);
                repository.save(place);
            }
        }
        return "added";
    }

    public List<Place> getAllPlace(){
        return repository.findAll();
    }

    public List<Place> findPlacesInHall(long hallId) {
        return repository.findByHallId(hallId);
    }

    public Place getPlaceById(Long id){
        return repository.getById(id);
    }
}
