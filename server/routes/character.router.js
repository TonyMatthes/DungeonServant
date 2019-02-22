const express = require('express');
const pool = require('../modules/pool');
const dummyData = require('../modules/dummydata')
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
    res.send(dummyData)
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;