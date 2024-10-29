const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

// function getAge(birthYear){
//     return (new Date().getFullYear())-birthYear;
// }
const characters = {
    getAge : function(birthYear) {
        return new Date().getFullYear()-birthYear;
    },
    'solid snake': {
        'age': function() {return characters.getAge(1972)},
        'birthName': 'David',
        'location': 'United States',
        'birthYear': 1972,
        'gameSeries': 'Metal Gear' 
    },
    'kratos':{
        'age': '2524',
        'birthName': 'Kratos of Sparta',
        'location': 'Sparta, Greece',
        'birthYear': '501 B.C.',
        'gameSeries': 'God of War'
    },
    'jak':{
        'age': '?',
        'birthName': 'Mar',
        'location': 'Sandover Village',
        'birthYear': '?',
        'gameSeries': 'Jak and Daxter'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{
    const characterName = request.params.name.toLowerCase()

    if( characters[characterName] ){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

