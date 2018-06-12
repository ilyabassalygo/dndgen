package com.ilya.dnd.util.parser.ability;

import com.ilya.dnd.dto.LegendaryActionDto;
import com.ilya.dnd.model.LegendaryAction;
import com.ilya.dnd.util.parser.ParseUtil;
import org.springframework.stereotype.Component;

@Component("legendaryActionsParseUtil")
public class LegendaryActionsParseUtil implements ParseUtil<LegendaryActionDto, LegendaryAction> {
    @Override
    public LegendaryAction parseDtoToEntity(LegendaryActionDto from) {
        LegendaryAction legendaryAction = new LegendaryAction();
        legendaryAction.setName(from.getName());
        legendaryAction.setDesc(from.getDesc());
        legendaryAction.setAttackBonus(from.getAttackBonus());
        legendaryAction.setDamageDice(from.getDamageDice());
        legendaryAction.setDamageBonus(from.getDamageBonus());

        return legendaryAction;
    }

    @Override
    public LegendaryActionDto parseEntityToDto(LegendaryAction from) {
        LegendaryActionDto legendaryActionDto = new LegendaryActionDto();
        legendaryActionDto.setId(from.getId());
        legendaryActionDto.setName(from.getName());
        legendaryActionDto.setDesc(from.getDesc());
        legendaryActionDto.setAttackBonus(from.getAttackBonus());
        legendaryActionDto.setDamageDice(from.getDamageDice());
        legendaryActionDto.setDamageBonus(from.getDamageBonus());

        return legendaryActionDto;
    }
}
