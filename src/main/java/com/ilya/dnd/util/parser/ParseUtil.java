package com.ilya.dnd.util.parser;

public interface ParseUtil<F, T> {
    T parseDtoToEntity(F from);
    F parseEntityToDto(T from);
}
