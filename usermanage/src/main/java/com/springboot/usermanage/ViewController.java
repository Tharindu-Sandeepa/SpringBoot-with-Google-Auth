package com.springboot.usermanage;

import com.springboot.usermanage.dto.UserDTO;
import com.springboot.usermanage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class ViewController {

    @Autowired
    private UserService userService;


    @GetMapping("/api/v1/userdetails")
    public Map<String, Object> getUserDetails(OAuth2AuthenticationToken token) {
        // Fetch user details from OAuth token
        String name = token.getPrincipal().getAttribute("name");
        String email = token.getPrincipal().getAttribute("email");
        String photoUrl = token.getPrincipal().getAttribute("picture");
        String locale = token.getPrincipal().getAttribute("locale");

        // Save or update the OAuth user in the database
        userService.saveOrUpdateOAuthUser(name, email, photoUrl);

        // Prepare the user details response
        Map<String, Object> userDetails = new HashMap<>();
        userDetails.put("name", name);
        userDetails.put("email", email);
        userDetails.put("photo", photoUrl);
        userDetails.put("locale", locale); // You can include more details if needed

        return userDetails;
    }

    @GetMapping("/api/v1/status")
    public String status() {
        return "Backend is running!";
    }
    @GetMapping("/api/v1/getusers")

    public List<UserDTO> getUsers(){
        return userService.getAllUsers();
    }
//    @PostMapping("/api/v1/adduser")
//    public UserDTO saveUser(@RequestBody UserDTO userDTO){
//        return userService.saveUser(userDTO);
//    }
//
//    @PutMapping("/api/v1/updateuser")
//    public  UserDTO updateUser(@RequestBody UserDTO userDTO){
//        return userService.updateUser(userDTO);
//    }
////    @DeleteMapping("/deleteuser")
////    public String deleteUser(@RequestBody UserDTO userDTO){
////        return userService.deleteUser(userDTO);
////    }
//
//    @DeleteMapping("/api/v1/deleteuser/{userId}")
//    public String deleteUser(@PathVariable Integer userId){
//        return userService.deleteUser(userId);
//    }
//
//    @GetMapping("/api/v1/user/{userId}")
//    public  UserDTO getUserbyId(@PathVariable Integer userId){
//        return  userService.getUsrById(userId);
//    }
}