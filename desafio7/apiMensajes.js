class ApiMsj {
    constructor (file){
        this.file = file;
    }

    //* crear mensaje
    async save(mensaje) {
        try {
            const data = await fs.promises.readFile(this.file, "utf-8");
            const mensajes = JSON.parse(data);
            mensajes.push(mensaje);
            const mensajesString = JSON.stringify(mensajes);
            await fs.promises.writeFile(this.file, mensajesString);
            return mensajes;
        } catch (e) {
            console.log(e);
        }
    }

    //* ver mensajes
    async getAll(){
        try {
            const data = await fs.promises.readFile(this.file, "utf-8");
            const mensajes = JSON.parse(data);
            return mensajes;
        } catch (e){
            console.log(e);
        }
    }
}

module.exports = ApiMsj;