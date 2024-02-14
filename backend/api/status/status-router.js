const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.json({message: "Status wired"});
});

module.exports = router;