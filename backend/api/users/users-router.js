const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.json({message: "Users wired"});
});

module.exports = router;