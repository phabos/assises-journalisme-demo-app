import * as firebase from 'firebase';

class Database {
    constructor() {
        this.config = {
            apiKey: "AIzaSyAy70gP1yaOXkp9tKEvjtSUd9y5AZIZxWw",
            authDomain: "test-app-3ff3f.firebaseapp.com",
            databaseURL: "https://test-app-3ff3f.firebaseio.com",
        };
    }
    getInstance() {
        if ( ! this.instance ) {
            console.log('Return new instance');
            this.instance = this.createInstance();
        }
        return this.instance;
    }
    createInstance() {
        return firebase.initializeApp(this.config).database();
    }
}
let database = new Database();
export default database;
