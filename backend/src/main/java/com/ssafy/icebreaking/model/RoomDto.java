package com.ssafy.icebreaking.model;

public class RoomDto {
	private String roomCode;
	private String roomName;
	private String roomAdmin;
	private int Game1;
	private int Game2;
	private int Game3;

	public String getRoomCode() {
		return roomCode;
	}

	public void setRoomCode(String roomCode) {
		this.roomCode = roomCode;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public String getRoomAdmin() {
		return roomAdmin;
	}

	public void setRoomAdmin(String roomAdmin) {
		this.roomAdmin = roomAdmin;
	}

	public int getGame1() {
		return Game1;
	}

	public void setGame1(int game1) {
		Game1 = game1;
	}

	public int getGame2() {
		return Game2;
	}

	public void setGame2(int game2) {
		Game2 = game2;
	}

	public int getGame3() {
		return Game3;
	}

	public void setGame3(int game3) {
		Game3 = game3;
	}

}
