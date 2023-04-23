package com.course.controller;

import com.course.mapper.dao.FoodUserModel;
import com.course.service.FoodUserService;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FoodUserController {

    private final FoodUserService foodUserService;

    public FoodUserController(FoodUserService foodUserService) {
        this.foodUserService = foodUserService;
    }

    @PostMapping("/user/concern/{userId}/{menuId}")
    public boolean concern(@PathVariable("userId") Long userId, @PathVariable("menuId") Long menuId) {
        return foodUserService.concern(userId, menuId);
    }

    @GetMapping("/user/concern/{userId}")
    public List<FoodUserModel> getConcern(@PathVariable("userId") Long userId) {
        return foodUserService.getConcern(userId);
    }
}
