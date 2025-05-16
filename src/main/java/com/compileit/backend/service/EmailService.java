package com.compileit.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public void sendOtp(String toEmail, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("🔐 CompileIT Login - Your One Time Password (OTP)");

        String content = String.format(
                "Hello,\n\n" +
                        "We received a request to log in to your CompileIT account.\n\n" +
                        "🔢 Your One-Time Password (OTP) is: %s\n\n" +
                        "📌 This OTP is valid for *5 minutes* only. Please do not share it with anyone.\n\n" +
                        "If you didn’t request this, please ignore this email or contact our support team immediately.\n\n" +
                        "Best Regards,\n" +
                        "Team CompileIT\n" +
                        "📧 support@compileit.com\n" +
                        "🌐 https://www.compileit.com\n",
                otp
        );

        message.setText(content);
        mailSender.send(message);

    }
}
