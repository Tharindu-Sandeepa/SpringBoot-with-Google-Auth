package com.springboot.usermanage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private int id;
    private String name;

    private String email;

    private String password;

    private String photo;

}

