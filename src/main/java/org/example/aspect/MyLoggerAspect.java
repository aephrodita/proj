package org.example.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.hibernate.annotations.Comment;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.logging.Logger;

@Aspect
@Component
@Slf4j
public class MyLogerAspect {
    @Around(value = "@annotation(org.example.aspect.ToLogOurApp)")
    public Object myLogMethod(ProceedingJoinPoint joinPoint) throws Throwable {
        log.info("Aspect is working");
        String answer = (String) joinPoint.proceed();
        Logger newLog = new Logger(
                null,
                String.valueOf(joinPoint.getArgs()),
                answer,
                LocalDateTime.now()
        );
        log.info("in->{}, out->{}", joinPoint.getArgs(), answer);
        return answer;
    }
}
