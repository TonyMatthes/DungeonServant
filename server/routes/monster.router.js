const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//get all monsters name, challenge rating and id
router.get('/', (req, res) => {
    !req.query.name?
    pool.query(`SELECT * FROM "monster"
                ORDER BY "challenge_rating"`)
        .then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('monster GET error', error)
            res.sendStatus(500)
        }):
        pool.query(`SELECT * FROM "monster"
                WHERE LOWER("name")=LOWER($1)`,[req.query.name])
        .then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('monster GET error', error)
            res.sendStatus(500)
        })

});

router.get('/:id', (req, res) => {
    pool.query(
        `SELECT * FROM "monster" WHERE "id" = $1`, [req.params.id]
    ).then((results) => {
        results.rows[0] ? res.send(results.rows[0]) : res.sendStatus(404)
    }).catch((error) => {
        console.log('monster GET error', error)
        res.sendStatus(500)
    })
});
//post a new monster, works but won't be used for now
// router.post('/', (req, res) => {
//     pool.query(
//         `INSERT INTO "monster"
// ("name",
// "strength",
// "dexterity",
// "constitution",
// "intelligence",
// "wisdom",
// "charisma",
// "hit_points",
// "hit_dice",
// "armor_class",
// "challenge_rating",
// "actions",
// "special_abilities")
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
//         [req.body.name,
//         req.body.strength,
//         req.body.dexterity,
//         req.body.constitution,
//         req.body.intelligence,
//         req.body.wisdom,
//         req.body.charisma,
//         req.body.hit_points,
//         req.body.hit_dice,
//         req.body.armor_class,
//         req.body.challenge_rating,
//         JSON.stringify(req.body.actions),
//         JSON.stringify(req.body.special_abilities)]
//     ).then((results) => {
//         res.sendStatus(201)
//     }).catch((error) => {
//         console.log('monster POST error', error)
//         res.sendStatus(500)
//     })
// });

module.exports = router;