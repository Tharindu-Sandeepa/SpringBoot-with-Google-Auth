package com.springboot.usermanage;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration
@CrossOrigin
public class SpringConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests(registry -> {
                    // Permit public access to the root and login paths
                    registry.requestMatchers("/login", "/api/v1/userdetails").permitAll();
                    registry.requestMatchers("/users", "/api/v1/getusers").permitAll();
                    // All other requests require authentication
                    registry.anyRequest().authenticated();
                })
                .oauth2Login(oauth2login -> {
                    oauth2login
                            .loginPage("/login")
                            .successHandler((request, response, authentication) -> {
                                // Redirect to the frontend's /profile route
                                response.sendRedirect("http://localhost:3000/profile");
                            });
                })
                .build();
    }
}