
module.exports = function(app) {

    
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(
        'mongodb+srv://<user>:<password>.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {useUnifiedTopology: true}
    ).then( (client) => {

        // console.log('Connected to Mongo Database')
        const db = client.db('portfolio_app')
        app.locals.db = db
        app.locals.emailsCollection = db.collection('emails')
        app.locals.articlesCollection = db.collection('articles')
        app.locals.categoriesCollection = db.collection('categories')
        app.locals.portfolioCollection = db.collection('portfolio')
        // db.collection('emails').createIndex({"email": 1}, {unique: true})

    })

}
