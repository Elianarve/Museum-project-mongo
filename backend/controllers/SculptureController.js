import SculptureModel from "../models/SculptureModel.js";

//GET
export const getAllSculptures = async (request, response) =>{
    try {
        const sculptures = await SculptureModel.find();
        response.status(200).json(sculptures);
    } catch(error) {
        response.status(500).json({message: error.message});
    }
}

//DELETE
export const deleteSculptures = async (req, res) => {
    const sculptureId = req.params.id;
    try {
        const result = await SculptureModel.deleteOne( {_id: sculptureId} );
        return res.status(201).send({ message: 'Sculpture deleted successfully' });

    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

//POST 
export const addSculpture = async (req, res) => {
    try {
        const addNewSculpture = await SculptureModel.insertMany(req.body)  //created
        res.status(201).json(addNewSculpture);
    }catch(error){
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}

//PUT
export const updateSculture = async (req, res) => {   //podria usar const {id} = request.params  y buscar el id con el metodo findBypk()
    const sculptureId = req.params.id; //request es la peticion
    try {
        await SculptureModel.updateOne({ _id: sculptureId }, req.body);
        const editSculpture = await SculptureModel.findById(sculptureId);
        res.status(200).json({message: `${sculptureId}, Actualizada correctamente, sculpture: ${editSculpture}`});
    } catch(error) {
        res.status(500).json({message: error.message});
    }   
}

export const getOneSculpture = async (req, res) =>{
    const sculptureId = req.params.id;
    try {
        const sculpture = await SculptureModel.findOne({ _id: sculptureId });
        res.status(200).json(sculpture);
    } catch(error) {
        res.status(500).json({message: error.message});
    }   
}