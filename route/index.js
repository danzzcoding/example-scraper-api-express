__path = process.cwd()

// Module
const express = require('express');
const route = express.Router();
const danzzapi = require('@danzzcoding/danzz-api');


route.get('/sosmed/ytplay', async (req, res, next) => {
	var query = req.query.q
	
	if (!query) return res.json({ error_msg: 'Enter title' })
	danzzapi.sosmed.ytplay(query)
	.then(data => {
		var result = data;
		res.json({
			status: true,
			code: 200,
			result
		})
	})
})
	
route.get('/sosmed/ytplayaudio', async (req, res, next) => {
	var query = req.query.q
	
	if (!query) return res.json({ error_msg: 'Enter title' })
	danzzapi.sosmed.ytplayaudio(query)
	.then(data => {
		var result = data;
		res.json({
			status: true,
			code: 200,
			result
		})
	})
})
	
route.get('/sosmed/ytplayvideo', async (req, res, next) => {
	var query = req.query.q
	
	if (!query) return res.json({ error_msg: 'Enter title' })
	danzzapi.sosmed.ytplayvideo(query)
	.then(data => {
		var result = data;
		res.json({
			status: true,
			code: 200,
			result
		})
	})
})

route.get('/sosmed/ytaudio', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.ytaudio(url)
	.then(data => {
		var result = data;
		res.json({
			status: true,
			code: 200,
			result
		})
	})
})

route.get('/sosmed/ytvideo', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.ytvideo(url)
	.then(data => {
		var result = data;
		res.json({
			status: true,
			code: 200,
			result
		})
	})
})

route.get('/sosmed/ttaudio', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.ttaudio(url)
	.then(data => {
		var result = data;
		res.json({
			status: true,
			code: 200,
			result
		})
	})
})

route.get('/sosmed/ttvideo', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.ttvideo(url)
	.then(data => {
		var result = data;
		res.json({
			status: true,
			code: 200,
			result
		})
	})
})

route.get('/sosmed/tiktok', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.ttvideo(url)
	.then(data => {
		var result = data;
		res.json({
			status: true,
			code: 200,
			result
		})
	})
})

route.get('/sosmed/mediafire', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.mediafire(url)
	.then(data => {
		var result = data;
		res.json({
			status: true,
			code: 200,
			result
		})
	})
})

module.exports = route