package com.devsuperior.dspixel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dspixel.dto.PixelArtDTO;
import com.devsuperior.dspixel.services.PixelArtService;

@RestController
@RequestMapping(value = "/pixelarts")
public class PixelArtController {
	
	@Autowired
	private PixelArtService service;
	
	@GetMapping
	public Page<PixelArtDTO> findAll(Pageable pageable) {
		return service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public PixelArtDTO findById(@PathVariable Long  id) {
		return service.findById(id);
	}

}
