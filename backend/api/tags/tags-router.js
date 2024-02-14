const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.json({message: "Tags wired"});
});

module.exports = router;