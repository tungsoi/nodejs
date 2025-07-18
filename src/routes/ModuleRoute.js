const express = require('express');
const router = express.Router();
const CreateModule = require('../job/CreateModule');
const createModule = new CreateModule();

router.post('/create', async function (req, res) {
    try {
        await createModule.handle(req.body);
        res.status(200).json({ success: true, message: 'Module created successfully' });
    } catch (error) {
        console.error('Error creating module:', error);
        res.status(500).json({ success: false, message: 'Failed to create module', error: error.message });
    }
});

module.exports = router;