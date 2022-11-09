import { Router } from "express";
const router = Router();

import{getTasks, createTask} from "../controles/tasks.controles.js"

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTasks);
router.post("/tasks", createTask);



export default router