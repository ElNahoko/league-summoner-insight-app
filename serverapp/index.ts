const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./routes')

require('dotenv').config()

/**
 * @constructor Initialisation du port et des données du server
 */
const port = process.env.PORT || 8080

/**
 * @description Define origin allowed
 */
app.use(
    cors({
        credentials: true,
        origin: [
            process.env.ORIGIN_URL,
            'http://localhost:3000',
        ],
    }),
)

app.use('/api', api)

/**
 * @function listener
 * @description Ouverture du port d'écoute de l'API
 */
const listener = app.listen(port, () => {
    console.log(`Your app is listening on port ${listener?.address()?.port}`)
})
