import { ObjectId, Schema } from 'mongoose';
import { Telefone } from './telefone'
import { Endereco } from './endereco'
import { Animal } from './animal'
import { Pessoa } from './pessoa'



export interface Cliente {
    id: ObjectId;
    endereco: String;
    telefones: Array<Telefone>;
    cpf: String;
    animais: Array<Animal>;
}

const userSchema = new Schema({
    enderecos: {
        type: Schema.Types.ObjectId,
        ref: "Enderecos",
    },
    telefones: {
        type: Schema.Types.ObjectId,
        ref: "Telefones",
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    animais: {
        type: Schema.Types.ObjectId,
        ref: "Animais",
    },
    pessoas: {
        type: Schema.Types.ObjectId,
        ref: "Pessoas",
    }
});