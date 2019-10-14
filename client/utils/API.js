import axios from "axios";

export default {

    getBooks: function() {
        return axios.get("/api/books");
    },

    getBook: function() {
        return axios.get("/api/books/" + id);
    },

    deleteBook: function() {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function() {
        return axios.post("/api/books", bookData);
    }
};