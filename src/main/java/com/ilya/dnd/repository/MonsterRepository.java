package com.ilya.dnd.repository;

import com.ilya.dnd.model.Monster;

import java.util.List;

public interface MonsterRepository {
    List<Monster> findAll();
    Monster find(long id);
    Monster update(Monster monster);
    void save(Monster monster);
    void delete(long id);
}
