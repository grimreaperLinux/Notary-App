import { Schema as _Schema, model, mongoose } from 'mongoose';

const Schema = _Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    referredUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    isPaymentMade: {
        type: Boolean,
        default: false
    },
    totalEarnings: {
        type: Number
    }
})

export default model("User", userSchema);