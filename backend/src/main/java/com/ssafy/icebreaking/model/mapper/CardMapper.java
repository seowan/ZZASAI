package com.ssafy.icebreaking.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.icebreaking.model.CardDto;

@Mapper
public interface CardMapper {
	public List<CardDto> returnList(Map<String, Object> map);
}
