package com.compileit.backend.service;

import com.compileit.backend.entity.Otp;
import com.compileit.backend.repository.OtpRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class OtpService {

    private final OtpRepository otpRepository;

    public String generateOtp() {
        return String.format("%06d", new Random().nextInt(999999));
    }

    public void saveOtp(String email, String otp) {
        Otp otpEntity = Otp.builder()
                .email(email)
                .otp(otp)
                .expiryTime(LocalDateTime.now().plusMinutes(5))
                .build();
        otpRepository.findByEmail(email).ifPresent(existing -> otpEntity.setId(existing.getId()));
        otpRepository.save(otpEntity);
    }

    public boolean verifyOtp(String email, String userOtp) {
        return otpRepository.findByEmail(email)
                .filter(otp -> otp.getOtp().equals(userOtp) && otp.getExpiryTime().isAfter(LocalDateTime.now()))
                .isPresent();
    }
}
