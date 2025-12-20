import mongoose, { Schema } from "mongoose";

export interface IUser extends mongoose.Document {
    clerkId: string;
    email: string;
    username: string;
    firstName?: string;
    lastName?: string;
    planId: number;
    creditBalance: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },

    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    planId: {
        type: Number,
        default: 1,
    },
    creditBalance: {
        type: Number,
        default: 10,
    },
}, { timestamps: true });

const User = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>('User', UserSchema);

export default User;