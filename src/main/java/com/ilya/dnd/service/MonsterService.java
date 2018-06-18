package com.ilya.dnd.service;

import com.ilya.dnd.dto.*;
import com.ilya.dnd.exception.EntityNotFoundException;
import com.ilya.dnd.exception.InvalidOperationException;
import com.ilya.dnd.exception.JpaException;
import com.ilya.dnd.exception.ServiceException;
import com.ilya.dnd.model.*;
import com.ilya.dnd.repository.MonsterRepository;
import com.ilya.dnd.util.mapper.MonsterMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MonsterService {
    private static final String DEFAULT_ERROR_MESSAGE = "Monster service error: ";
    private static final Logger LOGGER = LoggerFactory.getLogger(MonsterService.class);
    @Autowired
    private MonsterRepository monsterRepository;

    @Autowired
    private MonsterMapper monsterMapper;

    public Long countMonsters(){
        return monsterRepository.count();
    }

    public List<MonsterDto> findAllMonsters(int pageSize,int page) throws ServiceException {
        List<MonsterDto> monsterDtos = new ArrayList<>();
        try {
            for (Monster monster : monsterRepository.findAll(pageSize, page)) {
                MonsterDto monsterDto = monsterMapper.mapMonsterDto(monster);
                monsterDtos.add(monsterDto);
            }
        } catch (JpaException e) {
            LOGGER.error(DEFAULT_ERROR_MESSAGE + e.getMessage());
            throw new ServiceException(e);
        }
        return monsterDtos;
    }

    public MonsterDto findMonster(Long id) throws ServiceException {
        Monster monster = null;
        try {
            monster = monsterRepository.find(id);

            if (monster == null) {
                throw new EntityNotFoundException("No monster with such id " + id);
            }
        } catch (JpaException e) {
            LOGGER.error(DEFAULT_ERROR_MESSAGE + e.getMessage());
            throw new ServiceException(e);
        }
        return monsterMapper.mapFullMonsterDto(monster);
    }

    public void saveMonster(MonsterDto monsterDto) throws InvalidOperationException {
        try {
            monsterRepository.save(monsterMapper.mapMonsterEntity(monsterDto));
        } catch (JpaException e) {
            LOGGER.error(DEFAULT_ERROR_MESSAGE + e.getMessage());
            throw new InvalidOperationException();
        }
    }

    public void updateMonster(MonsterDto monsterDto) throws InvalidOperationException {
        try {
        Monster monster = monsterMapper.mapMonsterEntity(monsterDto);
        monster.setMonsterId(monsterDto.getId());
            monsterRepository.update(monster);
        } catch (JpaException e) {
            LOGGER.error(DEFAULT_ERROR_MESSAGE + e.getMessage());
            throw new InvalidOperationException();
        }
    }

    public void deleteMonster(long id) throws ServiceException {
        try {
            monsterRepository.delete(id);
        } catch (JpaException e) {
            LOGGER.error(DEFAULT_ERROR_MESSAGE + e.getMessage());
            throw new ServiceException();
        }
    }
}
