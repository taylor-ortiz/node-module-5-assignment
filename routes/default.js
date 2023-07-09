const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('default is invoked')
    res.sendFile(path.join(__dirname, '../', 'views', 'default.html'));
})

module.exports = router;