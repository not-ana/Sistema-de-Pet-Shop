import { Schema } from "mongoose";

interface Endereco {
    rua: String;
    numero: Number;
    bairro: String;
    cidade: String;
    cep: String;
}

const userSchema = new Schema({
    rua: {
        type: String,
        required: false,
        unique: false
    },
    numero: {
        type: Number,
        required: false,
        unique: false
    },
    bairro: {
        type: String,
        required: true,
        unique: false
    },
    cidade: {
        type: String,
        required: true,
        unique: false
    },
    cep: {
        type: String,
        required: true,
        unique: false
    }
});

export { Endereco }