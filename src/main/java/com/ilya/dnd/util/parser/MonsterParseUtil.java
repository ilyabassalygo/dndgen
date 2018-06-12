package com.ilya.dnd.util.parser;

import com.ilya.dnd.dto.MonsterDto;
import com.ilya.dnd.model.Monster;
import org.springframework.stereotype.Component;

@Component("monsterParseUtil")
public class MonsterParseUtil implements ParseUtil<MonsterDto, Monster> {
    @Override
    public Monster parseDtoToEntity(MonsterDto from) {
        return new Monster(from);
    }

    @Override
    public MonsterDto parseEntityToDto(Monster from) {
        return new MonsterDto(from);
    }
}
