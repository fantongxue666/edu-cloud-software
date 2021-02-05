package com.ftx.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@RefreshScope //消息总线，自动获取最新的git配置文件
public class PowerController {

    @Autowired
    TestInterface testInterface;
    @RequestMapping("/test11")
    public String test(){
        String string = testInterface.getString();
        return string;
    }

    @Value("${edu}")
    String foo;
    @RequestMapping(value = "/hi")
    public String hi(){
        return foo;
    }
}
