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
			data
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
			data
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
			data
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
			data
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
			data
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
			data
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
			data
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
			data
		})
	})
})

route.get('/sosmed/fbdl', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.fbdl(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/twdl', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.twdl(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/igstory', async (req, res, next) => {
	var username = req.query.username
	
	if (!username) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.igstory(username)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/igreels', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.igreels(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/igdl', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.igdl(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/igimg', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.igimg(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/snapinsta', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.snapinsta(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/ssstik', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.ssstik(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/snaptik', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.snaptik(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/sfrom', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.sfrom(url)
	.then(data => {
		var result = data;
		res.json({
			data
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
			data
		})
	})
})

route.get('/sosmed/zippy', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.zippy(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

route.get('/sosmed/scloud', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter url' })
	danzzapi.sosmed.scloud(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

module.exports = route
