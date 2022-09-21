const socket = io.connect();

// const render = (productos) =>{
//     const html = productos.map (producto =>`<tr class="datos-tabla">
//             <td class="form-control">
//                 ${producto.title}
//             </td>
//             <td class="form-control">
//                 $${producto.price}
//             </td>
//             <td class="form-control">
//                 <img class="imagen-tabla" src="${producto.thumbnail}" alt="${producto.thumbnail}">
//             </td>`)
//             .join ("")
//             document.getElementById("productos").innerHTML = html;
// }

const addProduct = (e) =>{
    const title = document.getElementById("title").value;
    document.getElementById("title").value = "";
    const price = document.getElementById("price").value;
    document.getElementById("price").value = "";
    const thumbnail = document.getElementById("thumbnail").value;
    document.getElementById("thumbnail").value = "";
    socket.emit("new-product", {title:title, price:price, thumbnail: thumbnail});
    return false;
};

socket.on('productos', productos => {
    makeTable(productos).then(html => {
        document.getElementById('productos').innerHTML = html
    })
});

const makeTable = (productos) =>{
    return fetch ("tabla-productos.hbs")
    .then(respuesta => respuesta.text())
    .then(plantilla =>{
        const template = Handlebars.compile(plantilla);
        const html = template ({productos})
        return html;
    })
}

// *------CENTRO DE MENSAJES--------------------------
const renderMsj = (mensajes) =>{
    const html = mensajes.map (mensaje => `<div class="historial-chat">
                <b class="mensaje-autor">${mensaje.autor}</b>
                [<span class="mensaje-fecha">${mensaje.date}</span>] :
                <i class="mensaje-texto">${mensaje.texto}</i>
            </div>`)
            .join(" ")
            document.getElementById("mensajes").innerHTML = html;
}

const sendMessage = (e) =>{
    const autor = document.getElementById("autor").value;
    const mensaje = document.getElementById("mensaje").value;
    document.getElementById("mensaje").value ="";
    socket.emit("new-msg", {autor:autor, texto:mensaje})
    return false;
}

socket.on("mensajes", data =>{
    renderMsj(data);
})