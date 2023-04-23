package com.course.service;

import com.course.mapper.CalenderMapper;
import com.course.mapper.dao.CalenderFoodModel;
import com.course.mapper.dao.CalenderModel;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalenderService {
    private final CalenderMapper calenderMapper;

    public CalenderService(CalenderMapper calenderMapper) {
        this.calenderMapper = calenderMapper;
    }

    public List<CalenderModel> getSchedulesById(Long id) {
        var a = calenderMapper.getSchedules(id);
        return calenderMapper.getSchedules(id);
    }
    public void SignIn(@Param("date") String date, @Param("userId") String userId) {
        calenderMapper.SignIn(date, userId);
    }

    public int addToCalender(CalenderFoodModel calenderFoodModel) {
         calenderFoodModel.setTimeName("food_" + calenderFoodModel.getTimeName());
         if (calenderMapper.selectCalenderByUserId(calenderFoodModel.getUserId(), calenderFoodModel.getDate()) != null) {
             if (calenderMapper.selectCalender(calenderFoodModel.getUserId(), calenderFoodModel.getDate(), calenderFoodModel.getTimeName()) != null) {
                 return calenderMapper.updateToCalender(calenderFoodModel.getUserId(), calenderFoodModel.getDate(), calenderFoodModel.getMenuId(), calenderFoodModel.getTimeName());
             }
         } else {
             return calenderMapper.addToCalender(calenderFoodModel.getUserId(), calenderFoodModel.getDate(), calenderFoodModel.getMenuId(), calenderFoodModel.getTimeName());
         }
        return 1;
    }
}
