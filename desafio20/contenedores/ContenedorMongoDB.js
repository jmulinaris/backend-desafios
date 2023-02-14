import mongoose from "mongoose";
import Config from "../config/configDB.js"

mongoose.set("strictQuery", true);
await mongoose.connect(Config.mongodb.cnxStr);

class ContenedorMongoDB {
    constructor (collection, schema){
        this.collection = mongoose.model(collection, schema)
    }

    async getAll(){
        try {
            const objetos = await this.collection.find({});
            return objetos;
        } catch (e){
            console.log(`Error al listar todos: ${e}`)
        }
    };

    async getById(id){
        try {
            const find = await this.collection.findOne({_id:id})
            if (find){
                return find;
            } else {
                return "Elemento no encontrado"
            }
        } catch (e){
            console.log(`Error al listar por ID: ${e}`)
        }
    };

    async save(object){
        try {
            await this.collection.create(object)
            const id = await this.collection
                .find({}, ({_id:1}))
                .sort({_id: -1})
                .limit(1)
            const newObj = await this.collection.findOne({ _id: id });
            return newObj;
        } catch (e) {
            console.log(`Error al guardar: ${e}`)
        }
    };

    async updateById(id, elem){
        try {
            let found = await this.collection.find({ _id: id })
            if (found){
                await this.collection.replaceOne({_id:id}, elem);
                found = await this.collection.findOne({ _id: id })
            } else {
                found = null;
            }
            return found;
        } catch (e){
            console.log(`Error al actualizar: ${e}`)
        }
    };

    async deleteById(id){
        try {
            let found = await this.collection.findOne({_id:id})
            if (!found){
                found = null;
            } else {
                await this.collection.deleteOne({_id:id})
            }
            return found;
        } catch (e){
            console.log(`Error al eliminar: ${e}`)
        }
    };
}

export default ContenedorMongoDB;
