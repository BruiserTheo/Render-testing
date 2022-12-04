const e = require('express')
const express = require('express')
const app = express()
const PORT = 8000
const tea = {
    'oolong':{
        'type':'black',
        'origin':'your house',
        'waterTemp':200,
        'steepTimeSeconds':180,
        'caffeinated': true,
        'flavor':'delicious'
    },
    'matcha':{
        'type':'green',
        'origin':'your house',
        'waterTemp':200,
        'steepTimeSeconds':180,
        'caffeinated': false,
        'flavor':'delicious'
    },
    'unknown':{
        'type':'unknown',
        'origin':'unknown',
        'waterTemp':200,
        'steepTimeSeconds':180,
        'caffeinated': 'unknown',
        'flavor':'unknown'
    }


}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
 
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT} better go catch it!`)
})