package com.devsuperior.dspixel.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ScorePK implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name = "pixelart_id")
	private PixelArt pixelart;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public ScorePK() {
	}

	public PixelArt getPixelArt() {
		return pixelart;
	}

	public void setPixelArt(PixelArt pixelart) {
		this.pixelart = pixelart;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
