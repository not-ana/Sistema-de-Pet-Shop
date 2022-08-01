import { ObjectId, Schema } from 'mongoose';
import { Pessoa } from './pessoa'

interface Usuario {
    senha: String;
    pessoas: Array<Pessoa>;
}

const userSchema = new Schema({
    senha: {
        type: String,
        required: true,
        unique: true
    },
    pessoas: {
        type: Schema.Types.ObjectId,
        ref: "Pessoas",
    }
});

export { Usuario }