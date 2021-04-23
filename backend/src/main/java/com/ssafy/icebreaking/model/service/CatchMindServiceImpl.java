package com.ssafy.icebreaking.model.service;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.icebreaking.model.mapper.CatchmindMapper;

@Service
public class CatchMindServiceImpl implements CatchMindService{

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	//DB에 저장된 문제 갯수 카운트해서 리턴해줌
	public int countQuestions() {
		return sqlSession.getMapper(CatchmindMapper.class).countQuestions();
	}

	@Override
	//target을 id로 값는 단어 리턴해주기
	public String findAnswer(int target) {
		String answer = sqlSession.getMapper(CatchmindMapper.class).findAnswer(target);
		return answer;
	}

}
