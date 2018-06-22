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

    public List<MonsterDto> mapMonsterEntityCollectionToFullDto(List<Monster> monsters) {
        List<MonsterDto> monsterDtos = new ArrayList<>();
        for (Monster monster : monsters) {
            monsterDtos.add(mapFullMonsterDto(monster));
        }
        return monsterDtos;
    }

    public Monster mapMonsterEntity(MonsterDto monsterDto) {
        Monster monster = monsterParseUtil.parseDtoToEntity(monsterDto);

        List<Action> actions = ParseUtil.parseDtoCollectionToEntity(monsterDto.getActions(), actionsParseUtil);
        List<LegendaryAction> legendaryActions = ParseUtil.parseDtoCollectionToEntity(monsterDto.getLegendaryActions(), legendaryActionsParseUtil);
        List<SpecialAbility> specialAbilities = ParseUtil.parseDtoCollectionToEntity(monsterDto.getSpecialAbilities(), specialAbilitiesParseUtil);
        List<Reaction> reactions = ParseUtil.parseDtoCollectionToEntity(monsterDto.getReactions(), reactionsParseUtil);

        monster.setActions(actions);
        monster.setLegendaryActions(legendaryActions);
        monster.setSpecialAbilities(specialAbilities);
        monster.setReactions(reactions);

        return monster;
    }

    public MonsterDto mapFullMonsterDto(Monster monster) {
        MonsterDto monsterDto = monsterParseUtil.parseEntityToDto(monster);

        List<ActionDto> actions = ParseUtil.parseEntityCollectionToDto(monster.getActions(), actionsParseUtil);
        List<LegendaryActionDto> legendaryActions = ParseUtil.parseEntityCollectionToDto(monster.getLegendaryActions(), legendaryActionsParseUtil);
        List<SpecialAbilityDto> specialAbilities = ParseUtil.parseEntityCollectionToDto(monster.getSpecialAbilities(), specialAbilitiesParseUtil);
        List<ReactionDto> reactions = ParseUtil.parseEntityCollectionToDto(monster.getReactions(), reactionsParseUtil);

        monsterDto.setActions(actions);
        monsterDto.setLegendaryActions(legendaryActions);
        monsterDto.setSpecialAbilities(specialAbilities);
        monsterDto.setReactions(reactions);

        return monsterDto;
    }


    public MonsterDto mapMonsterDto(Monster monster) {
        MonsterDto monsterDto = new MonsterDto();
        monsterDto.setId(monster.getMonsterId());
        monsterDto.setName(monster.getName());
        monsterDto.setChallengeRating(monster.getChallengeRating());
        return monsterDto;
    }


}
