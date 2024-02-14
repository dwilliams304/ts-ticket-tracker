const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.json({message: "Tickets wired"});
});

module.exports = router;