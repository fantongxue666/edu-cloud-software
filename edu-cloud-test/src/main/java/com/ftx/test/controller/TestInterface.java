package com.ftx.test.controller;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Repository
@FeignClient(value = "edu-cloud-power")
public interface TestInterface {

    @RequestMapping(value = "/power/test")
    String getString();
}
