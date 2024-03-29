package com.course.service;

import com.course.config.PasswordEncoderConfig;
import com.course.mapper.UserMapper;
import com.course.mapper.dao.UserModel;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementation class of user service
 *
 * @author KSC
 */
@Service
public class UserService {

    private final UserMapper userMapper;

    private final PasswordEncoder passwordEncoder;

    public UserService(UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public UserModel addUser(UserModel userModel) {
        /** encode raw password string before inserting to the database
         * the encode provided in {@link PasswordEncoderConfig#passwordEncoder}
         **/
        userModel.setPassword(this.passwordEncoder.encode(userModel.getPassword()));
        userMapper.insert(userModel);
        return userModel;
    }

    public int updateUser(UserModel record){
        System.out.println(record.getPhoneNum());
        return userMapper.updateUser(record);
    }

    public Integer countUser() {
        return userMapper.count();
    }

    public UserModel getUserById(Long userId) { return userMapper.selectByPrimaryKey(userId);
    }

    public List<UserModel> getUserByName(String name) {
        return this.userMapper.getUserByName(name);
    }

    public List<UserModel> getAllUser() {
        return this.userMapper.query();
    }

    public int deleteUser(Long userId) {
        return this.userMapper.deleteByPrimaryKey(userId);
    }
}
