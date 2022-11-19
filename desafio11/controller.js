import mongoose from "mongoose";

export const DBConnect = (cb) =>{
    mongoose.connect ("mongodb+srv://julimulinaris:julieta@frozen.jwfbeyr.mongodb.net/ecommerce?retryWrites=true&w=majority", {useNewUrlParser: true},
        (err)=> {
            console.log("Conectado!");
            if (err) {
                console.log(err)
            }
            cb();
        })
}

export const Users = mongoose.model("users", {
    username: String,
    password: String,
    email: String,
});