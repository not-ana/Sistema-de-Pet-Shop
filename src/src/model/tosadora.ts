import { ObjectId, Schema } from 'mongoose';
import { Atendimento } from './atendimento'
import { Usuario } from './usuario'


interface Tosadora {
    usuario: Array<Usuario>;
    tosadora: Array<Tosadora>;
}

const userSchema = new Schema({
    usuarios: {
        type: Schema.Types.ObjectId,
        ref: "Usuarios",
    },
    Tosadora: {
        type: Schema.Types.ObjectId,
        ref: "Tosadora",
    }
});

export { Tosadora }
