'use strict'

const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('layouts/outside/home')
})

module.exports = router