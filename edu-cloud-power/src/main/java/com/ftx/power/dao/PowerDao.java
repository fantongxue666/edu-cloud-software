package com.ftx.power.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author FanJiangFeng
 * @version 1.0.0
 * @ClassName PowerDao.java
 * @Description TODO
 * @createTime 2021年02月08日 17:20:00
 */
@Mapper
@Repository
public interface PowerDao {

    @Select(value = "select * from user where openid=#{openid}")
    List<Map> getUserByOpenid(String openid);

    @Insert(value = "insert into user values(#{id},#{openid})")
    int insertUser(Map map);
}
