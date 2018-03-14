const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model:
const quoteSchema = new Schema({
    "creator": {
        type: "String"
    },
    "client": {
        type: "String"
    },
    "date": {
        type: Date,
        default: Date.now()
    },
    "production": {
        "type": "object",
        "properties": {
            "crew": {
                "type": "array",
                "items": [{
                    "type": "object",
                    "properties": {
                        "type": {
                            "type": "string"
                        },
                        "category": {
                            "type": "string"
                        },
                        "unitCost": {
                            "type": "string"
                        },
                        "units": {
                            "type": "string"
                        },
                        "cost": {
                            "type": "string"
                        }
                    }
                }]
            },
            "equipments": {
                "type": "array",
                "items": [{
                    "type": "object",
                    "properties": {
                        "type": {
                            "type": "string"
                        },
                        "category": {
                            "type": "string"
                        },
                        "unitCost": {
                            "type": "string"
                        },
                        "units": {
                            "type": "string"
                        },
                        "cost": {
                            "type": "string"
                        }
                    }
                }]
            },
            "total": {
                "type": "string"
            }
        }
    },
    "postProduction": {
        "type": "object",
        "properties": {
            "numberOfVideos": {
                "type": "string"
            },
            "averageLength": {
                "type": "string"
            },
            "editStyle": {
                "type": "string"
            },
            "complexity": {
                "type": "string"
            },
            "unitCost": {
                "type": "string"
            },
            "total": {
                "type": "string"
            }
        }
    },
    "total": {
        "type": "string"
    },
    "quote": {
        "type": "string"
    }
});

const Quote = mongoose.model('quotes', quoteSchema); //collection, schema

module.exports = Quote;

module.exports.createQuote = (req, res) => {
    let details = req.body;

    let crew = [];
    let x = details["production"]["crew"];
    for(var i=0; i<x.length; i++) {
        let tempCrew = {
            "type": x[i.toString()]["type"].toString(),
            "category": x[i.toString()]["category"].toString(),
            "unitCost": x[i.toString()]["unitCost"].toString(),
            "units": x[i.toString()]["units"].toString(),
            "cost": x[i.toString()]["cost"].toString()
        };
        crew.push(tempCrew);
    }

    let equipments = [];
    x = details["production"]["equipments"];
    for(var i=0; i<x.length; i++) {
        let tempCrew = {
            "type": x[i.toString()]["type"].toString(),
            "category": x[i.toString()]["category"].toString(),
            "unitCost": x[i.toString()]["unitCost"].toString(),
            "units": x[i.toString()]["units"].toString(),
            "cost": x[i.toString()]["cost"].toString()
        };
        equipments.push(tempCrew);
    }

    //final document to be written to the collection:
    let data = {
        "creator": details["creator"].toString(),
        "client": details["client"].toString(),
        "production": {
            "crew": crew,
            "equipments": equipments,
            "total": details["production"]["total"].toString()
        },
        "postProduction": {
            "numberOfVideos": details["postProduction"]["numberOfVideos"].toString(),
            "averageLength": details["postProduction"]["averageLength"].toString(),
            "editStyle": details["postProduction"]["editStyle"].toString(),
            "complexity": details["postProduction"]["complexity"].toString(),
            "unitCost": details["postProduction"]["unitCost"].toString(),
            "total": details["postProduction"]["total"].toString()
        },
        "total": details["total"].toString(),
        "quote": details["quote"].toString()
    };

    Quote.create(data, (err, small) => {
        if(err) res.json({"status": "error", "msg": err});
        else res.json({"status": "success"});
    });
}

//get all quotations created by current user:
module.exports.getAll = (req, res) => {
    Quote.find({creator: req.params.user}, (err, data) => {
        if(err) res.json(err);
        else res.json(data);
    });
}

module.exports.getOne = (req, res) => {
    Quote.findOne({_id: req.params.id}, (err, data) => {
        if(err) res.json(err);
        else res.json(data);
    });
}

module.exports.deleteOne = (req, res) => {
    Quote.remove({_id: req.params.id}, (err, data) => {
        if(err) res.json({"status": "error", "msg": err});
        else res.json({"status": "success"});
    });
}
