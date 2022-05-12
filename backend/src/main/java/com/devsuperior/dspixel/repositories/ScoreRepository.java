package com.devsuperior.dspixel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dspixel.entities.Score;
import com.devsuperior.dspixel.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}