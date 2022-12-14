import {model, Schema} from "mongoose";

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true
    },
    userId: {
        type:String,
        required: true
    }
})

export default model('Tasks', taskSchema)