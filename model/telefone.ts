import { ObjectId, Schema } from 'mongoose';

interface Telefone {
    numero: String;
}

const userSchema = new Schema({
    numero: {
        type: String,
        required: true,
        unique: true
    }
})

export { Telefone }