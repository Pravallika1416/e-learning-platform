package com.compileit.backend.controller;

import com.compileit.backend.entity.Course;
import com.compileit.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/myclassroom")
public class MyClassroomController {

    private final UserService userService;

    @GetMapping
    public String getMyClassroom() {
        // ✅ Get the Authentication object from the Spring Security context
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        // ✅ Check if authentication is valid and extract the User object
        if (auth != null && auth.getPrincipal() instanceof com.compileit.backend.entity.User) {
            var user = (com.compileit.backend.entity.User) auth.getPrincipal();

            // ✅ Extract the email from the authenticated User
            String email = user.getEmail();

            // ✅ Get the user's registered courses
            Set<Course> courses = userService.getUserCourses(email);

            // ✅ Build the response message
            StringBuilder response = new StringBuilder("Welcome to MyClassroom, " + user.getName() + "!\n");
            response.append("Your Registered Courses: \n");

            // ✅ If courses exist, display them, otherwise show a no courses message
            if (courses != null && !courses.isEmpty()) {
                for (Course course : courses) {
                    response.append("Course: ").append(course.getCourseName())
                            .append(", Description: ").append(course.getDescription()).append("\n");
                }
            } else {
                response.append("No registered courses found.");
            }

            return response.toString();
        }

        // ✅ If authentication is not valid, return unauthorized message
        return "Unauthorized access.";
    }
}
