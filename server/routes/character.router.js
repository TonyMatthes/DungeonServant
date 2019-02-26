const express = require('express');
const pool = require('../modules/pool');
const dummyData = require('../modules/dummydata')
const router = express.Router();


//get all characters
router.get('/', (req, res) => {
    pool.query(
        `SELECT * FROM "character"`
    ).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('character GET error', error)
        res.sendStatus(500)
    })
});

//get a specific character
router.get('/:id', (req, res) => {
    pool.query(
        `SELECT * FROM "character" WHERE "id" = $1`, [req.params.id]
    ).then((results) => {
        results.rows[0] ? res.send(results.rows[0]) : res.sendStatus(404)
    }).catch((error) => {
        console.log('character GET error', error)
        res.sendStatus(500)
    })
});


//post a new character
router.post('/', (req, res) => {
    console.log(req.body)
    pool.query(
        `INSERT INTO "character"
        ("name",
        "strength",
        "dexterity",
        "constitution",
        "intelligence",
        "wisdom",
        "charisma",
        "max_hit_points",
        "hit_points",
        "person_id",
        "armor_class")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [req.body.name,
        req.body.strength,
        req.body.dexterity,
        req.body.constitution,
        req.body.intelligence,
        req.body.wisdom,
        req.body.charisma,
        req.body.max_hit_points,
        req.body.hit_points,
        req.body.person_id,
        req.body.armor_class]
    ).then((results) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log('character POST error', error)
        res.sendStatus(500)
    })
});

//update character
router.put('/', (req, res) => {
    pool.query(
        `UPDATE "character" 
        SET "name"=$1, 
        "strength"=$2,
        "dexterity"=$3,
        "constitution"=$4,
        "intelligence"=$5,
        "wisdom"=$6,
        "charisma"=$7,
        "max_hit_points"=$8,
        "hit_points"=$9,
        "person_id"=$10,
        "armor_class"=$11
        WHERE "id" =$12
        `,
        [req.body.name,
        req.body.strength,
        req.body.dexterity,
        req.body.constitution,
        req.body.intelligence,
        req.body.wisdom,
        req.body.charisma,
        req.body.max_hit_points,
        req.body.hit_points,
        req.body.person_id,
        req.body.armor_class,
        req.body.id]

    ).then((results) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log('character PUT error ', error)
    })
})

//delete character
router.delete('/:id', (req, res) => {
    pool.query(`DELETE FROM "character" WHERE "id"=$1`, [req.params.id]
    ).then((results) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log('character DELETE error ', error)
    })
})

module.exports = router;