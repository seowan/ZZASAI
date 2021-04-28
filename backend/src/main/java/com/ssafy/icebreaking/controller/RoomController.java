package com.ssafy.icebreaking.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.icebreaking.model.RoomDto;
import com.ssafy.icebreaking.model.service.RoomService;

//@CrossOrigin(origins= {"http://localhost:8080"})
//@CrossOrigin(origins= {"http://zzasai.com"})
@CrossOrigin(origins= {"*"})
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

	////////// 방 정보 전달//////////
	@GetMapping("/info")
	public RoomDto returnRoominfo(@RequestParam("roomcode") String roomcode, HttpServletRequest request)
			throws Exception {
		RoomDto roomdto = new RoomDto();

		roomdto = roomservice.returnRoominfo(roomcode);

		return roomdto;
	}
}
