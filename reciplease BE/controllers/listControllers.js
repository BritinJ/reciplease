import { response } from 'express';
import List from '../models/List.js';

export const getAllLists = async (req,res) =>{
    res.json({msg: 'get all lists'})
};

export const getList = async (req,res) =>{
    res.json({msg: 'get specific list'})
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
    res.json({msg: 'delete a specific list'})
};
            
export const updateList = async (req,res) =>{
    res.json({msg: 'update a specific list'})
};