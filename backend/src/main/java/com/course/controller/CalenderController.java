package com.course.controller;

import com.course.mapper.dao.CalenderFoodModel;
import com.course.mapper.dao.CalenderModel;
import com.course.service.CalenderService;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CalenderController {
    private final CalenderService calenderService;

    public CalenderController(CalenderService calenderService) {
        this.calenderService = calenderService;
    }

    @GetMapping("/user/schedule/{id}")
    public List<CalenderModel> getSchedules(@PathVariable("id") Long id) {
        return calenderService.getSchedulesById(id);
    }

    @PostMapping("/user/sign")
    public void SignIn(@Param("date") String date, @Param("userId") String userId) {
        calenderService.SignIn(date, userId);
    }

    @PostMapping("/user/addCalender")
    public int addToCalender(@RequestBody CalenderFoodModel calenderFoodModel) {
        return calenderService.addToCalender(calenderFoodModel);
    }
}
