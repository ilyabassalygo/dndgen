package com.ilya.dnd.repository;

import com.ilya.dnd.exception.JpaException;
import com.ilya.dnd.model.Monster;

import java.util.List;

public interface MonsterRepository {
    List<Monster> findAllBatch(int pageSize, int page) throws JpaException;
    Monster find(long id) throws JpaException;
    Monster findByName(String name) throws JpaException;
    Monster update(Monster monster) throws JpaException;
    void save(Monster monster) throws JpaException;
    void delete(long id) throws JpaException;
    Long count();
    List<Monster> findAllBetweenCr(String fromCr, String toCr) throws JpaException;
}
