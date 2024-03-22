import mongoose from 'mongoose';

// Definir el esquema 
const SculptureSchema = new mongoose.Schema({ 
    image_url: String, 
    title: String, 
    author: String,
    material: String,
    year: Number, 
    location: String
}, { versionKey: false });
  
// Definir el modelo 
const SculptureModel = mongoose.model('Sculpture', SculptureSchema);

export default SculptureModel;
