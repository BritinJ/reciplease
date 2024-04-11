import express from "express";
import { 
    getAllLists,
    getList,
    createList,
    deleteList,
    updateList
 } from "../controllers/listControllers.js";

const router = express.Router();

router.post('/', createList);
router.get('/', getAllLists);
router.get('/:id', getList);
router.patch('/:id', updateList);
router.delete('/:id', deleteList);

export default router;