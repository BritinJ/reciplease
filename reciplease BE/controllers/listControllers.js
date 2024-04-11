import mongoose from 'mongoose';
import List from '../models/List.js';

export const getAllLists = async (req,res) =>{
    try {
        const lists = await List.find({}).sort({ createdAt: -1});
        res.status(200).json(lists);
    } catch (error) {
        res.status(404).json({error: err.message });
    }
};

export const getList = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: 'list does not exist'});
    try{
        const list = await List.findById(id);
        if(!list) return res.status(404).json({error: 'list does not exist'});
        res.status(200).json(list);

    }catch(err){
        res.status(400).json({error: err.message});
    }
};

export const createList = async (req,res) =>{
    const{date, title, content} = req.body;

    try {
        const list = await List.create({date, title, content});
        res.status(200).json(list);        
    } catch(err){
        res.json({msg: 'shrugging emoji'})
    }
};

export const deleteList = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: 'list does not exist'});
    
    try{
        const list = await List.findById(id);
        if(!list) return res.status(404).json({error: 'list does not exist'});
        
        const deletedList = await List.findOneAndDelete({_id: id});
        res.status(200).json(deletedList);

    }catch(err){
        res.status(400).json({error: err.message});
    }
};
            
export const updateList = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: 'list does not exist'});
    
    try{
        const list = await List.findById(id);
        if(!list) return res.status(404).json({error: 'list does not exist'});
        
        const updatedList = await List.findByIdAndUpdate({_id: id}, {...req.body});
        res.status(200).json(updatedList);

    }catch(err){
        res.status(400).json({error: err.message});
    }
};