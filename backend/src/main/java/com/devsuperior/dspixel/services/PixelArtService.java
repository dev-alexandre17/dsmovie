package com.devsuperior.dspixel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dspixel.dto.PixelArtDTO;
import com.devsuperior.dspixel.entities.PixelArt;
import com.devsuperior.dspixel.repositories.PixelArtRepository;

@Service
public class PixelArtService {
	
	@Autowired
	private PixelArtRepository repository;
	
	@Transactional(readOnly = true)
	public Page<PixelArtDTO> findAll(Pageable pageable) {
		Page<PixelArt> result = repository.findAll(pageable);
		Page<PixelArtDTO> page = result.map(x -> new PixelArtDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public PixelArtDTO findById(Long id){
		PixelArt result = repository.findById(id).get();
		PixelArtDTO dto  = new PixelArtDTO(result);
		return dto;
	}

}
