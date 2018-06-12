package com.ilya.dnd.repository;

import com.ilya.dnd.model.Action;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Transactional
@Repository("actionRepository")
public class ActionRepository implements AbilityRepository<Action> {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void save(Action ability) {
        entityManager.persist(ability);
    }
}
