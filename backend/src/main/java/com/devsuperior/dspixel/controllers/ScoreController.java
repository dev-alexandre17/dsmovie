package com.devsuperior.dspixel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dspixel.dto.PixelArtDTO;
import com.devsuperior.dspixel.dto.ScoreDTO;
import com.devsuperior.dspixel.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired	
	private ScoreService service;
	
	@PutMapping
	public PixelArtDTO saveScore(@RequestBody ScoreDTO dto) {
		PixelArtDTO pixelartDTO = service.saveScore(dto);
		return pixelartDTO;
	}

}
