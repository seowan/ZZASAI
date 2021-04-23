package com.ssafy.icebreaking.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.icebreaking.model.service.CatchMindService;

//@CrossOrigin(origins= {"http://localhost:3000"})
//@CrossOrigin(origins= {"http://k4a205.p.ssafy.io"})
@RestController
@RequestMapping("/catchmind")
public class CatchMindController {
	public static final Logger logger = LoggerFactory.getLogger(CatchMindController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	CatchMindService catchmindservice;

	////////// 정답을 보내주기//////////
	@GetMapping("/answer")
	public ResponseEntity<Map<String, Object>> catchmindAnswer(HttpServletRequest request) throws Exception {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		Random rd = new Random();
		try {
			int count = catchmindservice.countQuestions();
			int target = rd.nextInt(count) + 1;
			String answer = catchmindservice.findAnswer(target);
			resultMap.put("answer", answer);
			resultMap.put("message", SUCCESS);
			status = HttpStatus.ACCEPTED;
		} catch (Exception e) {
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}
}
