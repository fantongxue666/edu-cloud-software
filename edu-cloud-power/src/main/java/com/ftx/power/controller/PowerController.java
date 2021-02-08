package com.ftx.power.controller;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ftx.power.dao.PowerDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/weixin")
public class PowerController {

    @Autowired
    private PowerDao powerDao;

        //微信code换取open_id
        private String appID = "wxb44d77c8ddc418c6";
        private String appSecret = "a094b1e2d8d1b06de5bc577d88166467";

        @RequestMapping("/getOpenId")
        @JsonIgnoreProperties(ignoreUnknown = true)
        public String getOpenId(@RequestParam("code") String code) throws IOException {
                String result = "";

                //请求微信服务器，用code换取openid。HttpUtil是工具类，后面会给出实现，Configure类是小程序配置信息，后面会给出代码
                String url="https://api.weixin.qq.com/sns/jscode2session?appid="
                        + appID + "&secret="
                        + appSecret + "&js_code="
                        + code
                        + "&grant_type=authorization_code";

            RestTemplate restTemplate = new RestTemplate();
            //进行网络请求,访问url接口
            ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, null, String.class);
            //根据返回值进行后续操作
            if(responseEntity != null && responseEntity.getStatusCode() == HttpStatus.OK)
            {
                String sessionData = responseEntity.getBody();
                System.out.println(sessionData);
                JSONObject jsonObject = JSONObject.parseObject(sessionData);
                String openid = (String) jsonObject.get("openid");
                result=openid;
                List<Map> list = powerDao.getUserByOpenid(openid);
                if(list.size()==0){
                    Map map=new HashMap();
                    map.put("id", UUID.randomUUID().toString());
                    map.put("openid",openid);
                    int i = powerDao.insertUser(map);
                }
            }
            return result;
        }



    }


