const PetController = require('../controller/pets.controller');

module.exports = (app) => {
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:id', PetController.getOnePet);
    app.post('/api/pets', PetController.createPet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);
}