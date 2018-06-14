package com.ilya.dnd.repository;

import com.ilya.dnd.exception.JpaException;
import com.ilya.dnd.model.Monster;

import java.util.List;

public interface MonsterRepository {
    List<Monster> findAll() throws JpaException;
    Monster find(long id) throws JpaException;
    Monster update(Monster monster) throws JpaException;
    void save(Monster monster) throws JpaException;
    void delete(long id) throws JpaException;
}
