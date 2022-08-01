import { ObjectId, Schema } from 'mongoose'
import { Servico } from './servico'
import { Animal } from './animal'

interface Atendimento {
    id: ObjectId;
    servico: Enumerator;
    data: Date;
    horario: Date;
    preco: Number;
}

const userSchema = new Schema({
    servico: {
        type: Enumerator,
        required: true,
        unique: false
    },
    data: {
        type: Date,
        required: true,
        unique: false
    },
    preco: {
        type: Number,
        required: true,
        unique: false
    }
})

export { Atendimento }