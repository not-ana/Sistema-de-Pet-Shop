import { ObjectId, Schema } from 'mongoose';
import { Atendimento } from './atendimento'
import { Usuario } from './usuario'


interface Veterinaria {
usuario: Array<Usuario>;
    veterinaria: Array<Veterinaria>;
}

const userSchema = new Schema({
    usuarios: {
        type: Schema.Types.ObjectId,
        ref: "Usuarios",
    },
    Veterinaria: {
        type: Schema.Types.ObjectId,
        ref: "Veterinaria",
    }
});

export { Veterinaria }
