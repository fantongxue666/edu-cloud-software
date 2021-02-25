package com.ftx.test.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@RefreshScope //消息总线，自动获取最新的git配置文件
@Api(tags = "测试测试")
public class PowerController {

    @Autowired
    TestInterface testInterface;
    @PostMapping("/getRoleList")
    @ApiOperation("测试一")
    public String test(){
        String string = testInterface.getString();
        return string;
    }

    @Value("${edu}")
    String foo;
    @PostMapping("/getRoleList2")
    @ApiOperation("测试二")
    public String hi(){
        return foo;
    }
}
