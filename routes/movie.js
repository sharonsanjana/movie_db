const express =  require('express')
const router = express.Router()

router.get('/', (request,response) => {
    response.send('movie list')
})

module.exports = router