class User {
    constructor (name, surname, books, pets){
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    }
    getFullName (){
        console.log (`Mi nombre completo es ${this.name} ${this.surname}`)
    }
    addMascota (pets){
        this.pets.push(pets);
        console.log(this.pets);
    }
    countMascotas(){
        console.log(this.pets.length);
    }
    addBook(book){
        this.books.push(book);
        console.log(this.books);
    }
    getBookNames(){
        let books = this.books.map ((book) =>{
            return book.nombre;
        })
        console.log(books);
    }
}

let user = new User (
    "Julieta",
    "Mulinaris",
    [
        {nombre:"Harry Potter y la piedra filosofal", autor:"J.K. Rowling"},
        {nombre:"El señor de los anillos", autor:"J.R.R. Tolkien"}],
    ["Gato"]
    )

user.getFullName();
user.addMascota("Perro");
user.countMascotas();
user.addBook({nombre:"Harry Potter y la cámara secreta", autor:"J.K. Rowling"});
user.getBookNames();