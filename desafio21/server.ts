// import { serve } from "https://deno.land/std@0.106.0/http/mod.ts";

// const server = serve({port: 8081});

// for await (const req of server) {
//     console.log(req);
//     if (req.url == "/hi"){
//         req.respond({ body: `Hola a ti!` })
//     } else {
//         req.respond({ body: `Hola mundo!`})
//     }
// }

import { serve } from "https://deno.land/std@0.159.0/http/server.ts";

interface colorArray {
    color: string,
}

const colors: string[] = [];

const port = 8080;
const handler = async (req: Request): Promise<Response> => {
    if (req.method == "POST") {
        console.log(req.headers);
        if (
            req.headers.has("content-type") && 
            req.headers.get("content-type")?.startsWith("application/json")
            ) {
            const body: colorArray = await req.json()
            const color = JSON.stringify({ data: body })
            colors.push(color);
            console.log(colors);
            console.log(body);
            return new Response(color, { status: 200 })
        } else {
            return new Response("Error! Espera formato json", { status: 200, headers: {
                "content-type": "text/html; charset=UTF-8"
            } })
        }
    } else {
        return new Response(`
        <html>
        <body>
            <form method="POST">
                <label>Ingrese un color</label>
                <input type="text" name="color" />
            </form>
        </body>
        </html>`, { headers: {
            "content-type": "text/html; charset=UTF-8"
        } })
    }
};

await serve(handler, { port });