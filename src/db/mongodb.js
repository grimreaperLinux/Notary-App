import mongoose from "mongoose"

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Notary-App')
}

export default connect