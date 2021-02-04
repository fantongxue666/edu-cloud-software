package com.ftx.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class PowerController {

    @Autowired
    TestInterface testInterface;
    @RequestMapping("/test11")
    public String test(){
        String string = testInterface.getString();
        return string;
    }
}
