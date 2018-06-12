package com.ilya.dnd.util.mapper;

import com.ilya.dnd.dto.*;
import com.ilya.dnd.model.*;
import com.ilya.dnd.util.parser.ParseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MonsterMapper {

    @Autowired
    @Qualifier("monsterParseUtil")
    private ParseUtil<MonsterDto, Monster> monsterParseUtil;

    @Autowired
    @Qualifier("actionsParseUtil")
    private ParseUtil<ActionDto, Action> actionsParseUtil;

    @Autowired
    @Qualifier("legendaryActionsParseUtil")
    private ParseUtil<LegendaryActionDto, LegendaryAction> legendaryActionsParseUtil;

    @Autowired
    @Qualifier("specialAbilitiesParseUtil")
    private ParseUtil<SpecialAbilityDto, SpecialAbility> specialAbilitiesParseUtil;

    @Autowired
    @Qualifier("reactionsParseUtil")
    private ParseUtil<ReactionDto, Reaction> reactionsParseUtil;

    public Monster mapMonsterEntity(MonsterDto monsterDto) {
        Monster monster = monsterParseUtil.parseDtoToEntity(monsterDto);

        List<Action> actions = parseDtoCollectionToEntity(monsterDto.getActions(), actionsParseUtil);
        List<LegendaryAction> legendaryActions = parseDtoCollectionToEntity(monsterDto.getLegendaryActions(), legendaryActionsParseUtil);
        List<SpecialAbility> specialAbilities = parseDtoCollectionToEntity(monsterDto.getSpecialAbilities(), specialAbilitiesParseUtil);
        List<Reaction> reactions = parseDtoCollectionToEntity(monsterDto.getReactions(), reactionsParseUtil);

        monster.setActions(actions);
        monster.setLegendaryActions(legendaryActions);
        monster.setSpecialAbilities(specialAbilities);
        monster.setReactions(reactions);

        return monster;
    }

    public MonsterDto mapFullMonsterDto(Monster monster) {
        MonsterDto monsterDto = monsterParseUtil.parseEntityToDto(monster);

        List<ActionDto> actions = parseEntityCollectionToDto(monster.getActions(), actionsParseUtil);
        List<LegendaryActionDto> legendaryActions = parseEntityCollectionToDto(monster.getLegendaryActions(), legendaryActionsParseUtil);
        List<SpecialAbilityDto> specialAbilities = parseEntityCollectionToDto(monster.getSpecialAbilities(), specialAbilitiesParseUtil);
        List<ReactionDto> reactions = parseEntityCollectionToDto(monster.getReactions(), reactionsParseUtil);

        monsterDto.setActions(actions);
        monsterDto.setLegendaryActions(legendaryActions);
        monsterDto.setSpecialAbilities(specialAbilities);
        monsterDto.setReactions(reactions);

        return monsterDto;
    }


    public MonsterDto mapMonsterDto(Monster monster) {
        return monsterParseUtil.parseEntityToDto(monster);
    }

    private <F, T> List<T> parseDtoCollectionToEntity(List<F> dtos, ParseUtil<F, T> parseUtil) {
        List<T> entities = new ArrayList<>();
        if (dtos != null) {
            for (F dto : dtos) {
                entities.add(parseUtil.parseDtoToEntity(dto));
            }
        }
        return entities;
    }

    private <F, T> List<F> parseEntityCollectionToDto(List<T> entities, ParseUtil<F, T> parseUtil) {
        List<F> dtos = new ArrayList<>();
        if (entities != null) {
            for (T entity : entities) {
                dtos.add(parseUtil.parseEntityToDto(entity));
            }
        }
        return dtos;
    }
}
