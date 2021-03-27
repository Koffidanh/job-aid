const db = require('../models');
const Sequelize = require('sequelize')
const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customer_controller')

router.get('/customer', customerController.view)


module.exports = (app) => {
    app.get('/api/customers', (req, res) => {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Customer.findAll({
            include: [db.Post],
        }).then((dbCustomer) => res.json(dbCustomer));
    });

    app.get('/api/customers/:id', (req, res) => {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Customer.findOne({
            where: {
                id: req.params.id,
            },
            include: [db.JobType],
        }).then((dbCustomer) => res.json(dbCustomer));
    });

    app.post('/api/customers', (req, res) => {
        db.Customer.create(req.body).then((dbCustomer) => res.json(dbCustomer));
    });

    app.delete('/api/authors/:id', (req, res) => {
        db.Author.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbAuthor) => res.json(dbAuthor));
    });
};


module.exports = router;