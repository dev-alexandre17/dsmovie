package com.devsuperior.dspixel.dto;

public class ScoreDTO {

	private Long pixelartId;
	private String email;
	private Double score;
	
	public ScoreDTO(){
	}

	public Long getPixelartId() {
		return pixelartId;
	}

	public void setPixelartId(Long pixelartId) {
		this.pixelartId = pixelartId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}
	
}
