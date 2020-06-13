import { Router } from "express";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.list);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post("/points", pointsController.create);

export default routes;
