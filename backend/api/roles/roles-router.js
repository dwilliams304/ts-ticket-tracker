const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.json({message: "Roles wired"});
});

module.exports = router;