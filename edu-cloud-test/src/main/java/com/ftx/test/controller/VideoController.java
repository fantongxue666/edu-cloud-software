package com.ftx.test.controller;

import com.ftx.authentication.rainshiro.constant.JsonObject;
import com.ftx.test.dao.VideoMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * @author FanJiangFeng
 * @version 1.0.0
 * @ClassName VideoController.java
 * @Description TODO
 * @createTime 2021年02月25日 16:24:00
 */
@RestController
@RequestMapping("/video")
@RefreshScope //消息总线，自动获取最新的git配置文件
@Api(tags = "教学视频管理")
public class VideoController {

    @Autowired
    private VideoMapper videoMapper;

    @PostMapping("/getVideoList")
    @ApiOperation("教学视频列表接口")
    public JsonObject<List<Map>> getVideoList(){
        List<Map> videoList = videoMapper.getVideoList();
        return new JsonObject<>(videoList);
    }

}
