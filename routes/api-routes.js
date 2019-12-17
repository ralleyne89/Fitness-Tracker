const express = require('express');
const router = express.Router();

router.get('/workouts', (req, res) => {
    res.json({
        connection: 'success',
        data: 'this is the workout library'
    })
})


module.exports = router;