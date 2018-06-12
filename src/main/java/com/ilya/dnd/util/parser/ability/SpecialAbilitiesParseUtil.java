package com.ilya.dnd.util.parser.ability;

import com.ilya.dnd.dto.SpecialAbilityDto;
import com.ilya.dnd.model.SpecialAbility;
import com.ilya.dnd.util.parser.ParseUtil;
import org.springframework.stereotype.Component;

@Component("specialAbilitiesParseUtil")
public class SpecialAbilitiesParseUtil implements ParseUtil<SpecialAbilityDto, SpecialAbility> {
    @Override
    public SpecialAbility parseDtoToEntity(SpecialAbilityDto from) {
        SpecialAbility specialAbility = new SpecialAbility();
        specialAbility.setName(from.getName());
        specialAbility.setDesc(from.getDesc());
        specialAbility.setAttackBonus(from.getAttackBonus());
        specialAbility.setDamageDice(from.getDamageDice());
        specialAbility.setDamageBonus(from.getDamageBonus());

        return specialAbility;
    }

    @Override
    public SpecialAbilityDto parseEntityToDto(SpecialAbility from) {
        SpecialAbilityDto specialAbilityDto = new SpecialAbilityDto();
        specialAbilityDto.setId(from.getId());
        specialAbilityDto.setName(from.getName());
        specialAbilityDto.setDesc(from.getDesc());
        specialAbilityDto.setAttackBonus(from.getAttackBonus());
        specialAbilityDto.setDamageDice(from.getDamageDice());
        specialAbilityDto.setDamageBonus(from.getDamageBonus());

        return specialAbilityDto;
    }
}
