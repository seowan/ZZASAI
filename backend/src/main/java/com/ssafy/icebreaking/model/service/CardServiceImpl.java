package com.ssafy.icebreaking.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.icebreaking.model.CardDto;
import com.ssafy.icebreaking.model.mapper.CardMapper;

@Service
public class CardServiceImpl implements CardService{

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<CardDto> getCardList() {
		String name = null;
		String fronturl = null;
		String backurl = null;
		Map<String, Object> map = new HashMap<>();
		map.put("name",name);
		map.put("front_url", fronturl);
		map.put("back_url", backurl);
		return sqlSession.getMapper(CardMapper.class).returnList(map);
	}

}
