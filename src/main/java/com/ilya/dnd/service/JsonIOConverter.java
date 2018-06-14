package com.ilya.dnd.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ilya.dnd.dto.AbilityDto;
import com.ilya.dnd.dto.MonsterDto;
import com.ilya.dnd.exception.JpaException;
import com.ilya.dnd.model.Monster;
import com.ilya.dnd.repository.MonsterRepository;
import com.ilya.dnd.util.mapper.MonsterMapper;
import com.ilya.dnd.util.parser.ParseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class JsonIOConverter {

    private static final String FILE_PATH = "d:\\monsters.json";
    private static long randId = 1;

    @Autowired
    private MonsterMapper monsterMapper;

    @Autowired
    private MonsterRepository monsterRepository;

    @Autowired
    @Qualifier("monsterParseUtil")
    private ParseUtil<MonsterDto, Monster> parseUtil;

    public List<MonsterDto> convertFileJson() throws JpaException {
        List<MonsterDto> monsters = new ArrayList<>();

        ObjectMapper mapper = new ObjectMapper();
        try {
            monsters = mapper.readValue(new File(FILE_PATH), new TypeReference<List<MonsterDto>>(){});
        } catch (IOException e) {
            e.printStackTrace();
        }
        for (MonsterDto monsterDto: monsters) {
            monsterRepository.save(monsterMapper.mapMonsterEntity(monsterDto));
        }

        return monsters;
    }

    public MonsterDto convertOneMonster(){
        MonsterDto monster = new MonsterDto();

        ObjectMapper mapper = new ObjectMapper();
        try {
            monster = mapper.readValue(new File("d:\\monster.json"), MonsterDto.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        monster.setId(232344141);

        return monster;
    }

    private static void defineIdsOfMonsters(List<MonsterDto> monsters) {
        if (monsters != null) {
            for (MonsterDto monsterDto : monsters) {
                if (monsterDto != null && monsterDto.getId() == 0) {
                    monsterDto.setId(randId);
                }
                randId++;
                defineIdsOfAbilities(monsterDto.getSpecialAbilities());
                defineIdsOfAbilities(monsterDto.getActions());
                defineIdsOfAbilities(monsterDto.getLegendaryActions());
                defineIdsOfAbilities(monsterDto.getReactions());
            }
        }
    }

    private  static void defineIdsOfAbilities(List<? extends AbilityDto> abilities) {
        if (abilities != null) {
            for (AbilityDto ability : abilities) {
                if (ability != null && ability.getId() == 0) {
                    ability.setId(randId);
                }
                randId++;
            }
        }
    }
}
