package com.course.mapper;

import com.course.mapper.dao.UserModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "userMapper")
public interface UserMapper {
    int deleteByPrimaryKey(Long id);

    int insert(UserModel record);

    int insertSelective(UserModel record);

    UserModel selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UserModel record);

    int updateByPrimaryKey(UserModel record);

    UserModel selectUserByUsername(String username);

    List<UserModel> query();

    Integer count();

    int updateUser(UserModel record);

    List<UserModel> getUserByName(String name);
}
