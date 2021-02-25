package com.ftx.test.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author FanJiangFeng
 * @version 1.0.0
 * @ClassName VideoMapper.java
 * @Description TODO
 * @createTime 2021年02月25日 16:28:00
 */
@Mapper
@Repository
public interface VideoMapper {

    List<Map> getVideoList();
}
