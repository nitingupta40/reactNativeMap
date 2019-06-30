const user = {
        _id: "1",
        name: "Nitin",
        email: "nitinguptaworkemail@gmail.com",
        picture: "https://cloudinary.com/asdf"
}

module.exports = {
    Query: {
        me: ()  => user
    }
}