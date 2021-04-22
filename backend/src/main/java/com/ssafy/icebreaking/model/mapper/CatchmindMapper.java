package com.ssafy.icebreaking.model.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CatchmindMapper {

	public int countQuestions();
	public String findAnswer(int target);
}
