package com.course.mapper;

import com.course.mapper.dao.CalenderModel;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "calenderMapper")
public interface CalenderMapper {
    List<CalenderModel> getSchedules(Long id);

    void SignIn(@Param("date") String date, @Param("userId") String userId);

    CalenderModel selectCalenderByUserId(@Param("userId") Long userId, @Param("date") String data);

    Long selectCalender(@Param("userId") Long userId, @Param("date") String data, @Param("timeName") String timeName);

    int addToCalender(@Param("userId") Long userId, @Param("date") String data, @Param("menuId") Long menuId, @Param("timeName") String timeName);

    int updateToCalender(@Param("userId") Long userId, @Param("date") String data, @Param("menuId") Long menuId, @Param("timeName") String timeName);
}
