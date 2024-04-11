import { Schema, model } from "mongoose";

const ListSchema = new Schema({
    date:{
        type: Date,
        required: true,
        default: Date.now
    },

    title: {
        type: String,
        required: true
    },

    content:{
        type: String,
        required: true
    }
}, 
{
    collection: 'lists',
    timestamps: true

});

export default model('List', ListSchema);