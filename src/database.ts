import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongo_address', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(">>> Database connected");
    } catch {
        console.log("Error")
    }
}

export default connect;