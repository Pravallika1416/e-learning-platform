package com.compileit.backend.controller;

import com.compileit.backend.entity.User;
import com.compileit.backend.repository.UserRepository;
import com.compileit.backend.service.EmailService;
import com.compileit.backend.service.JwtService;
import com.compileit.backend.service.OtpService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final EmailService emailService;
    private final OtpService otpService;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    // ✅ Step 1: Send OTP
    @PostMapping("/send-otp")
    public ResponseEntity<Map<String, String>> sendOtp(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String otp = otpService.generateOtp();
        otpService.saveOtp(email, otp);
        emailService.sendOtp(email, otp);

        return ResponseEntity.ok(Map.of("message", "OTP sent to " + email));
    }

    // ✅ Step 2: Verify OTP & Login/Register
    @PostMapping("/verify-otp")
    public ResponseEntity<Map<String, Object>> verifyOtp(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String otp = payload.get("otp");

        boolean isValid = otpService.verifyOtp(email, otp);
        if (!isValid) {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid or expired OTP"));
        }

        User user = userRepository. findByEmailIgnoreCase(email)
                .orElseGet(() -> User.builder()
                        .email(email)
                        .verified(true)
                        .role("junior")
                        .build());

        user.setVerified(true);
        userRepository.save(user);

        Map<String, Object> claims = new HashMap<>();
        claims.put("role", user.getRole());
        claims.put("userId", user.getId());

        String jwtToken = jwtService.generateToken(email, claims);

        Map<String, Object> response = new HashMap<>();
        response.put("message", "OTP verified");
        response.put("token", jwtToken);
        response.put("email", email);
        response.put("role", user.getRole());

        return ResponseEntity.ok(response);
    }
}
