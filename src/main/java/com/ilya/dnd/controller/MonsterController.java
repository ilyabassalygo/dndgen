package com.ilya.dnd.controller;

import com.ilya.dnd.dto.MonsterDto;
import com.ilya.dnd.exception.InvalidOperationException;
import com.ilya.dnd.exception.JpaException;
import com.ilya.dnd.exception.ServiceException;
import com.ilya.dnd.service.JsonIOConverter;
import com.ilya.dnd.service.MonsterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/monster")
public class MonsterController {

    @Autowired
    private MonsterService monsterService;

    @Autowired
    private JsonIOConverter jsonIOConverter;

    @RequestMapping(method = RequestMethod.GET, path = "/count")
    public ResponseEntity<Long> receiveMonsterCount(){
        return new ResponseEntity<>(monsterService.countMonsters(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<MonsterDto>> findMonsters(@RequestParam String pageSize, @RequestParam String page) {
        try {
            return new ResponseEntity<>(monsterService.findAllMonstersBatch(Integer.valueOf(pageSize), Integer.valueOf(page)), HttpStatus.OK);
        } catch (ServiceException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<MonsterDto> findMonser(@PathVariable long id){
        try {
            return new ResponseEntity<>(monsterService.findMonster(id), HttpStatus.OK);
        } catch (ServiceException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.GET, path = "/by/{name}")
    public ResponseEntity<MonsterDto> findMonsterByName(@PathVariable String name){
        try {
            return new ResponseEntity<>(monsterService.findMonsterByName(name), HttpStatus.OK);
        } catch (ServiceException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.GET, path = "/convert")
    public List<MonsterDto> convertMonsters(){
        try {
            return jsonIOConverter.convertFileJson();
        } catch (JpaException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity saveMonster(@RequestBody MonsterDto monsterDto) {
        try {
            monsterService.saveMonster(monsterDto);
            return new ResponseEntity(HttpStatus.CREATED);
        } catch (InvalidOperationException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity updateMonster(@RequestBody MonsterDto monsterDto) {
        try {
            monsterService.updateMonster(monsterDto);
        } catch (InvalidOperationException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity deleteMonster(@PathVariable long id) {
        try {
            monsterService.deleteMonster(id);
        } catch (ServiceException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
