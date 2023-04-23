package com.course.service;

import com.course.mapper.FoodUserMapper;
import com.course.mapper.dao.FoodUserModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodUserService {

    private final FoodUserMapper foodUserMapper;

    public FoodUserService(FoodUserMapper foodUserMapper) {
        this.foodUserMapper = foodUserMapper;
    }

    public boolean concern(Long userId, Long menuId) {
        return foodUserMapper.concern(userId, menuId) != 0;
    }

    public List<FoodUserModel> getConcern(Long userId) {
        return foodUserMapper.getConcern(userId);
    }
}
