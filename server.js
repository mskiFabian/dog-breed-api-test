const express = require('express')
const app = express()
const PORT = 8000

const doggies = {
    'akita': {
        'origin': 'Asia'
    },
    'american bulldog': {
        'origin': 'America'
    },
    'golden retriever': {
        'origin':  'Great Britain'
    },
    'unknown': {
        'origin': 'unknown'
    }
}



app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:breed', (req, res) => {
    const dogName = req.params.breed.toLowerCase()
    if( doggies[dogName] ) {
        res.json(doggies[dogName].origin)
    } else {
        res.json(doggies['unknown'].origin)
    }
})


// app.get('/api/:breed', (req, res) => {
//     const dogBreed = req.params.breed.toLowerCase()
// })

app.listen(PORT, () => {
    console.log(`The server is running at ${PORT} port`);
})