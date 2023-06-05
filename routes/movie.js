const express =  require('express')
const router = express.Router()

router.get('/', (request,response) => {
    response.send('movie genre')
})


router.post('/' , (request,response) =>{
    response.send('movie list')
})

router.patch('/:id' , (request,response) => {
    response.send(`patching id ${request.params.id}`)

})


module.exports = router