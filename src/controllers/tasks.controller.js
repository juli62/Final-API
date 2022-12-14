import { create } from "domain";
import Tasks from "../models/tasks";

export const getTasks = async (req,res) => {
    try{
        const tasks = await Tasks.find({})
        res.status(200).json(tasks)
    }catch(err){
        res.status(404).send({
            error: err,
            message: 'Task not found'
        })
    }
}

export const createTask = async (req,res) =>{
                  //params //query params
   //localhost:3001/:id/test?page=1
   //localhost:3001/create
   /**
    * body{
    * "asjdkalsd": "'asdjaklsdjakl",
    * }
    */
    try{  
        
        const {taskName, task, completed, userId} = req.body;
        const createdTask = await Tasks.create({
            taskName,
            task,
            completed,
            userId
        })
        
        res.status(200).send({createdTask})
    
    }catch(err){
        res.status(500).send({
            error: err,
            message: 'Server Error'
        })
    }
        
}

export const editTask = async (req,res) => {
        try{
            const {id} = req.params
            const {taskName, task, completed} = req.body
            const taskUpdate = await Tasks.findByIdAndUpdate(id, {
                taskName,
                task,
                completed
            })
            res.status(201).send({taskUpdate})
        }catch(err){
        res.status(404).send({
            error: err,
            message: 'User not found'
        })}
        
    }

export const deleteTask = async(req,res) => {
    try{
        const {id} = req.params
        const taskToDelete = await Tasks.findByIdAndDelete(id)
        res.status(200).send({taskToDelete})
    }catch(err){
        res.status(404).send({
            error: err,
            message: 'Task not Found'
        })

   }
}   