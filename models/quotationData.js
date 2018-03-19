const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemDataSchema = new Schema({
    "type": {
        "type": String
    },
    "item": {
        "type": String
    },
    "options": {
        "type": "array",
        "items": [{
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "cost": {
                    "type": "string"
                }
            }
        }]
    }
});

const Item = mongoose.model('itemcosts', itemDataSchema); //collection, schema

module.exports = Item;

module.exports.getCrewData = (res) => {
    Item.find({
            "type": "Crew"
        }, {
            item: 1,
            options: 1
        },
        (err, data) => {
            if (err) res.json({
                status: "error",
                message: err
            });
            else res.json({
                status: "success",
                data: data
            });
        });
}

module.exports.getEquipmentData = (res) => {
    Item.find({
            type: "Equipment",
        }, {
            item: 1,
            options: 1
        },
        (err, data) => {
            if (err) res.json({
                status: "error",
                message: err
            });
            else res.json({
                status: "success",
                data: data
            });
        });
}
