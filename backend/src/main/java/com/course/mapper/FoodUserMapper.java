package com.course.mapper;

import com.course.mapper.dao.CommentModel;
import com.course.mapper.dao.DiscussPostModel;
import com.course.mapper.dao.FoodUserModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "footUserMapper")
public interface FoodUserMapper {
    int concern(Long userId, Long menuId);

    List<FoodUserModel> getConcern(Long userId);

}
