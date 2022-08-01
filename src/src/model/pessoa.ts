import { ObjectId, Schema } from 'mongoose';

interface Pessoa {
    id: ObjectId;
    nome: String;
    login: String;
}

const userSchema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: false
    },
    login: {
        type: String,
        required: true,
        unique: true
    }
})

export { Pessoa }