import axios from 'axios';

const http = axios.create({
    baseURL: "https://capstonetegram.azurewebsites.net"
});

export default {

    login(user) {
        return http.post('/login', user)
    },

    register(user) {
        return http.post('/register', user)
    }

    //Get sample of 50 recent photos
    //get photos by user
    //POST for new photos
    //delete
    //add, delete favorites from favorite list




}