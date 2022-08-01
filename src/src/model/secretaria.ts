import { ObjectId, Schema } from 'mongoose';
import { Atendimento } from './atendimento'
import { Usuario } from './usuario'


interface Secretaria {
    usuario: Array<Usuario>;
    atendimento: Array<Atendimento>;
}

const userSchema = new Schema({
    usuarios: {
        type: Schema.Types.ObjectId,
        ref: "Usuarios",
    },
    atendimentos: {
        type: Schema.Types.ObjectId,
        ref: "Atendimentos",
    }
});

export { Secretaria }
