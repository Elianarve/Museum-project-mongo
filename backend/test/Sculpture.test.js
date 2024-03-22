import request from 'supertest';
import app from '../app.js'
import SculptureModel from '../models/SculptureModel.js';

const api = request(app); //nos permite hacer peticiones con request q es un metodo de supertest

describe('Testing', () =>{
        
    describe('GET / api / sculptures', () =>{
        let response;
        beforeEach( async() => {
        response = await api.get("/api").send();
    })
        test('Returned as json', async () =>{
            const response = await api.get('/api')
            expect(response.status).toBe(200)
        });
    })

  
    describe('POST / api/ sculptures', () =>{
        const newSculpture = {
            image_url: "test",
            title: "test",
            author: "test",
            material: "test",
            year: 1967,
            location: "test"
        }
 
    test('Send POST method', async () => {
        const response = await api.post("/api").send(newSculpture);
        expect(typeof response).toBe('object')
        expect(response.status).toBe(201)  
      });

      afterAll(async() =>{
        await SculptureModel.deleteMany({ title: 'test'})
    })
})

    describe('PUT / api / sculptures', () =>{
        let createdSculpture = {};
        beforeEach(async () =>{
            createdSculpture = await SculptureModel.create({
            image_url: "ELIANA",
             title: "Eliana",
             author: "AMY",
             material: "Papel",
             year: 1967,
             location: "Eliana"
        })
    })
    afterAll(async() =>{
        await SculptureModel.deleteMany( { id: createdSculpture.id} )
    })
      test('Send PUT method', async () => {  
        const response = await api.put(`/api/${createdSculpture.id}`).send({title: 'test'})
        expect(typeof response).toBe('object')
        expect(response.status).toBe(200)
    })
})

describe('DELETE', () => {
    let createdSculpture = {};
    let response;
    beforeEach(async () =>{
        createdSculpture = await SculptureModel.create({
        image_url: "ELIANA",
         title: "Eliana",
         author: "AMY",
         material: "Papel",
         year: 1967,
         location: "Eliana"
    })
    response = await api.delete(`/api/${createdSculpture.id}`)
   })

   test('Delete', async () => {
    expect(response.status).toBe(201);
    response = await SculptureModel.findOne( { id: createdSculpture.id });
   })

})
});




