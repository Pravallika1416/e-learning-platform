package com.compileit.backend.repository;

import com.compileit.backend.entity.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @EntityGraph(attributePaths = "courses")
    Optional<User> findByEmailIgnoreCase(String email);
}

