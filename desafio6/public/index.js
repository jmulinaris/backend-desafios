const socket = io.connect();

const render = (data) =>{
    const html = data.map (producto =>`<tr class="datos-tabla">
            <td class="form-control">
                ${producto.title}
            </td>
            <td class="form-control">
                $${producto.price}
            </td>
            <td class="form-control">
                <img class="imagen-tabla" src="${producto.thumbnail}" alt="${producto.thumbnail}">
            </td>`)
            .join ("")
            document.getElementById("productos").innerHTML = html;
}

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

socket.on("productos", data =>{
    console.log(data);
    render(data);
})

// *------CENTRO DE MENSAJES--------------------------
const renderMsj = (mensajes) =>{
    const html = mensajes.map (mensaje => ` <div>
                            <ul id="mensajes">
                            <li class="historial-chat">
                                <div>${mensaje.date}</div>
                                <div>
                                <span>${mensaje.autor}</span>
                                </div>
                                <div>${mensaje.texto}</div>
                            </li>
                            </ul>
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

socket.on("mensajes", mensaje =>{
    console.log(mensaje);
    render(mensaje);
})