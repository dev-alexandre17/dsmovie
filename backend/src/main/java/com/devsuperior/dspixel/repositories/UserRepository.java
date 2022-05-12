package com.devsuperior.dspixel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dspixel.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}