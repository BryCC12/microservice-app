const router = require('express').Router()

router.route('/').get((req, res) => {
    const name = process.env.NAME
    msg = `Hola ${name} desde get request!`;
    res.json({msg});
})

module.exports = router