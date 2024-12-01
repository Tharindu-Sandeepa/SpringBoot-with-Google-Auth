package com.springboot.usermanage.repo;


import com.springboot.usermanage.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {

    @Query(value = "SELECT * FROM User WHERE id=?1" ,nativeQuery = true)
    User getUserById(Integer userId);

    Optional<User> findByEmail(String email);

}
