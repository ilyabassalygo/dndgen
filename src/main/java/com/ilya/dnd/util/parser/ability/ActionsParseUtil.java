package com.ilya.dnd.util.parser.ability;

import com.ilya.dnd.dto.ActionDto;
import com.ilya.dnd.model.Action;
import com.ilya.dnd.util.parser.ParseUtil;
import org.springframework.stereotype.Component;

@Component("actionsParseUtil")
public class ActionsParseUtil implements ParseUtil<ActionDto, Action> {

    @Override
    public Action parseDtoToEntity(ActionDto from) {
        Action action = new Action();
        action.setName(from.getName());
        action.setDesc(from.getDesc());
        action.setAttackBonus(from.getAttackBonus());
        action.setDamageDice(from.getDamageDice());
        action.setDamageBonus(from.getDamageBonus());

        return action;
    }

    @Override
    public ActionDto parseEntityToDto(Action from) {
        ActionDto actionDto = new ActionDto();
        actionDto.setId(from.getId());
        actionDto.setName(from.getName());
        actionDto.setDesc(from.getDesc());
        actionDto.setAttackBonus(from.getAttackBonus());
        actionDto.setDamageDice(from.getDamageDice());
        actionDto.setDamageBonus(from.getDamageBonus());

        return actionDto;
    }
}
