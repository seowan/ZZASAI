package com.ssafy.icebreaking.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.icebreaking.model.CardDto;
import com.ssafy.icebreaking.model.service.CardService;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/card")
public class CardController {
	public static final Logger logger = LoggerFactory.getLogger(CardController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	CardService cardservice;
	
	//////////카드 리스트 랜덤으로 구성하여 보내주기//////////
	@GetMapping("/list")
	public List<CardDto> cardList(HttpServletRequest request) throws Exception{
		List<CardDto> cardlist = cardservice.getCardList();

		return cardlist;
	}
}
