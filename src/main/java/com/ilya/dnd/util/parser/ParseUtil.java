package com.ilya.dnd.util.parser;

import java.util.ArrayList;
import java.util.List;

public interface ParseUtil<Dto, Entity> {
    Entity parseDtoToEntity(Dto from);
    Dto parseEntityToDto(Entity from);
    
    static  <Dto, Entity> List<Entity> parseDtoCollectionToEntity(List<Dto> dtos, ParseUtil<Dto, Entity> parseUtil) {
        List<Entity> entities = new ArrayList<>();
        if (dtos != null) {
            for (Dto dto : dtos) {
                entities.add(parseUtil.parseDtoToEntity(dto));
            }
        }
        return entities;
    }

    static  <Dto, Entity> List<Dto> parseEntityCollectionToDto(List<Entity> entities, ParseUtil<Dto, Entity> parseUtil) {
        List<Dto> dtos = new ArrayList<>();
        if (entities != null) {
            for (Entity entity : entities) {
                dtos.add(parseUtil.parseEntityToDto(entity));
            }
        }
        return dtos;
    }
}
