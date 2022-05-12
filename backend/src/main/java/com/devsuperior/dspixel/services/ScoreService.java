package com.devsuperior.dspixel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dspixel.dto.PixelArtDTO;
import com.devsuperior.dspixel.dto.ScoreDTO;
import com.devsuperior.dspixel.entities.PixelArt;
import com.devsuperior.dspixel.entities.Score;
import com.devsuperior.dspixel.entities.User;
import com.devsuperior.dspixel.repositories.PixelArtRepository;
import com.devsuperior.dspixel.repositories.ScoreRepository;
import com.devsuperior.dspixel.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private PixelArtRepository pixelartrepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public PixelArtDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		PixelArt pixelart = pixelartrepository.findById(dto.getPixelartId()).get();
		
		Score score = new Score();
		score.setPixelArt(pixelart);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for (Score s: pixelart.getScores()){
			sum = sum + s.getValue();
		}
		
		double avg = sum / pixelart.getScores().size();
		
		pixelart.setScore(avg);
		pixelart.setCount(pixelart.getScores().size());
		
		pixelart = pixelartrepository.save(pixelart);
		
		return new PixelArtDTO(pixelart);
		
	}
}
