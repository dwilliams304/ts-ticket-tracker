const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.json({message: "Comments wired"});
});

module.exports = router;