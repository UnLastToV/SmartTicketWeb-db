const express = requrie('express')
const router = express.Router()


router.get('/auth', (req, res) => {
    res.send("Auth Endpoint")
})



module.exports = router