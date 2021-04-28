package com.ssafy.icebreaking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.icebreaking.model.RoomDto;
import com.ssafy.icebreaking.model.service.RoomService;

@RestController
@RequestMapping("/room")
public class RoomController {

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	RoomService roomservice;

	////////// 방 정보 DB에 저장//////////
	@PostMapping("/create")
	public String createRoom(@RequestBody RoomDto roomdto) throws Exception {
		String result = "";

		try {
			roomservice.insertRoominfo(roomdto);
			result = SUCCESS;
		} catch (Exception e) {
			result = FAIL;
		}

		return result;
	}
}
