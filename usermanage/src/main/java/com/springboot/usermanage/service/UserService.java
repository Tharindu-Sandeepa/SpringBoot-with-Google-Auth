package com.springboot.usermanage.service;

import com.springboot.usermanage.dto.UserDTO;
import com.springboot.usermanage.model.User;
import com.springboot.usermanage.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

//    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public List<UserDTO> getAllUsers(){
        List<User>userList = userRepo.findAll();
        return modelMapper.map(userList,new TypeToken<List<UserDTO>>(){}.getType());
    }

    public UserDTO saveUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO,User.class));
        return userDTO;
    }

    public UserDTO updateUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO,User.class));
        return userDTO;
    }

//    public String deleteUser(UserDTO userDTO){
//
//        userRepo.delete(modelMapper.map(userDTO ,User.class));
//        return "User deletd";
//    }

    public String deleteUser(Integer userId){

        userRepo.deleteById(userId);
        return "User deletd";
    }

    public UserDTO getUsrById(Integer userId){
        User user = userRepo.getUserById(userId);
        return modelMapper.map(user, UserDTO.class);
    }

    // **Add or Update OAuth User**
    public User saveOrUpdateOAuthUser(String name, String email, String photoUrl) {
        Optional<User> existingUser = userRepo.findByEmail(email);

        User user;
        if (existingUser.isPresent()) {
            // Update user details if already exists
            user = existingUser.get();
            user.setName(name);
            user.setPhoto(photoUrl);
        } else {
            // Create a new user if not present
            user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPhoto(photoUrl);
        }

        return userRepo.save(user);
    }

    //auth
//
//    public User registerUser(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return userRepo.save(user);
//    }
//
//    public Optional<User> loginUser(String email, String password) {
//        Optional<User> user = userRepo.findByEmail(email);
//        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
//            return user;
//        }
//        return Optional.empty();
//    }

}
