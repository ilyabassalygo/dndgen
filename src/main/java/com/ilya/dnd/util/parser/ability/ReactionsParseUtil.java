package com.ilya.dnd.util.parser.ability;

import com.ilya.dnd.dto.ReactionDto;
import com.ilya.dnd.model.Reaction;
import com.ilya.dnd.util.parser.ParseUtil;
import org.springframework.stereotype.Component;

@Component("reactionsParseUtil")
public class ReactionsParseUtil implements ParseUtil<ReactionDto, Reaction> {
    @Override
    public Reaction parseDtoToEntity(ReactionDto from) {
        Reaction reaction = new Reaction();
        reaction.setName(from.getName());
        reaction.setDesc(from.getDesc());
        reaction.setAttackBonus(from.getAttackBonus());
        reaction.setDamageDice(from.getDamageDice());
        reaction.setDamageBonus(from.getDamageBonus());

        return reaction;
    }

    @Override
    public ReactionDto parseEntityToDto(Reaction from) {
        ReactionDto reactionDto = new ReactionDto();
        reactionDto.setId(from.getId());
        reactionDto.setName(from.getName());
        reactionDto.setDesc(from.getDesc());
        reactionDto.setAttackBonus(from.getAttackBonus());
        reactionDto.setDamageDice(from.getDamageDice());
        reactionDto.setDamageBonus(from.getDamageBonus());

        return reactionDto;
    }
}
