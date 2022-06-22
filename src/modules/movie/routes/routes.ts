import { MovieController } from './../MovieController';
import { Router } from "express";

export const movieRouter = Router();

const movieController = new MovieController();

movieRouter.get("/:id", movieController.findById);
movieRouter.get("/", movieController.read);

movieRouter.post("/", movieController.create);

movieRouter.put("/:id", movieController.update);

movieRouter.delete("/:id", movieController.delete)
