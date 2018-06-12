package com.ilya.dnd.service;

import com.ilya.dnd.dto.*;
import com.ilya.dnd.model.*;
import com.ilya.dnd.repository.MonsterRepository;
import com.ilya.dnd.util.mapper.MonsterMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MonsterService {

    @Autowired
    private MonsterRepository monsterRepository;

    @Autowired
    private MonsterMapper monsterMapper;

    public List<MonsterDto> findAllMonsters() {
        List<MonsterDto> monsterDtos = new ArrayList<>();
        for (Monster monster: monsterRepository.findAll()) {
            MonsterDto monsterDto = monsterMapper.mapMonsterDto( monster);
            monsterDtos.add(monsterDto);
        }
        return monsterDtos;
    }

    public MonsterDto findMonster(Long id) {
        Monster monster = monsterRepository.find(id);
        return monsterMapper.mapMonsterDto(monster);
    }

    public void saveMonster(MonsterDto monsterDto) {
        monsterRepository.save(monsterMapper.mapMonsterEntity(monsterDto));
    }

    public void updateMonster(MonsterDto monsterDto) {
        Monster monster = monsterMapper.mapMonsterEntity(monsterDto);
        monster.setMonsterId(monsterDto.getId());
        monsterRepository.update(monster);
    }

    public void deleteMonster(long id) {
        monsterRepository.delete(id);
    }
}
