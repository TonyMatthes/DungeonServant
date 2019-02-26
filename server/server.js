
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

const rollDice = require('./modules/rollDice')

// Route includes
const userRouter = require('./routes/user.router');
const characterRouter = require('./routes/character.router');
const monsterRouter = require('./routes/monster.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
//user information
app.use('/api/user', userRouter);
//player character info
app.use('/api/character', characterRouter);
//monster and npc info
app.use('/api/monster', monsterRouter);

//a dice roller, not in a route right now, but I may make a router later to handle server game functions
app.get('/roll',(req,res)=>{
    res.send(rollDice(req.query.number, req.query.sides))
})
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
