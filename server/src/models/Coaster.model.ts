import mongoose from "mongoose";

export interface CoasterInterface {
    _id: string;
    title: string;
    description: string;
    inversions: number;
    length: number;
    imageUrl: string;
}

const coasterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    inversions: {
        type: Number,
        default: 0
    },
    length: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String,
        required: true
    },
}, { versionKey: false });

export const CoasterModel = mongoose.model<CoasterInterface>("coaster", coasterSchema);