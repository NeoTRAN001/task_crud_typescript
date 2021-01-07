import App from './app';
import database from './database';

// Starting server
database();
const app = new App();
app.start();