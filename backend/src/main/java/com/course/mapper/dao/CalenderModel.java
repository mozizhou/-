package com.course.mapper.dao;

import java.sql.Date;

public class CalenderModel {
    private Long id;

    private Long userId;

    private Date date;

    private Long foodMorning;

    private Long signMorning ;

    private Long foodNoon;

    private Long signNoon;

    private Long foodAfternoon;

    private Long signAfternoon ;

    private Long fix;

    private Long signFix;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getFoodMorning() {
        return foodMorning;
    }

    public void setFoodMorning(Long foodMorning) {
        this.foodMorning = foodMorning;
    }

    public Long getSignMorning() {
        return signMorning;
    }

    public void setSignMorning(Long signMorning) {
        this.signMorning = signMorning;
    }

    public Long getFoodNoon() {
        return foodNoon;
    }

    public void setFoodNoon(Long foodNoon) {
        this.foodNoon = foodNoon;
    }

    public Long getSignNoon() {
        return signNoon;
    }

    public void setSignNoon(Long signNoon) {
        this.signNoon = signNoon;
    }

    public Long getFoodAfternoon() {
        return foodAfternoon;
    }

    public void setFoodAfternoon(Long foodAfternoon) {
        this.foodAfternoon = foodAfternoon;
    }

    public Long getSignAfternoon() {
        return signAfternoon;
    }

    public void setSignAfternoon(Long signAfternoon) {
        this.signAfternoon = signAfternoon;
    }

    public Long getFix() {
        return fix;
    }

    public void setFix(Long fix) {
        this.fix = fix;
    }

    public Long getSignFix() {
        return signFix;
    }

    public void setSignFix(Long signFix) {
        this.signFix = signFix;
    }
}
