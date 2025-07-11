const express = require('express');
const router = express.Router();
const redisService = require('../service/RedisService');

router.post('/put', async (req, res) => {
    const { key, value, expireSeconds } = req.body;
    if (!key || value === undefined) {
        return res.status(400).json({ error: 'Key and value are required' });
    }
    try {
        await redisService.put(key, value, expireSeconds);
        res.json({ message: 'Value set successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/get/:key', async (req, res) => {
    const { key } = req.params;
    try {
        const value = await redisService.get(key);
        if (value === null) {
            return res.status(404).json({ error: 'Key not found' });
        }
        res.json({ key, value });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;