const sqLiteConfig = {
    client: "sqlite3",
    connection: {
        filename: "./mensajes",
    },
    useNullAsDefault: true,
};


module.exports = {
    sqLiteConfig,
}