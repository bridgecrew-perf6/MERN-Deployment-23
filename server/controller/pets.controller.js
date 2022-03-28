const Pet = require("../model/pets.model");

module.exports.getAllPets = (req, res) => {
    Pet.find()
        .then(allPets=>{
            res.json({results: allPets})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(onePet => {
            res.json({results: onePet})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => {
            res.json({results: newPet})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.updatePet = (req,res) => {
    Pet.updateOne(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedPet => {
            res.json({results: updatedPet})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet => {
            res.json({results: deletedPet})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}