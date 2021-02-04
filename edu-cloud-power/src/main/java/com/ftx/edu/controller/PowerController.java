package com.ftx.edu.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/power")
public class PowerController {

    @RequestMapping("/test")
    public String test(){
        return "feign测试！";
    }
}
