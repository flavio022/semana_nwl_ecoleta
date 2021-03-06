import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = Router();
const uploads = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();
import { celebrate, Joi } from "celebrate";

routes.get("/items", itemsController.list);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post(
  "/points",
  uploads.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string()
          .required()
          .email(),
        whatsapp: Joi.number().required(),
        longitude: Joi.number().required(),
        latitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string()
          .required()
          .max(2),
        items: Joi.string().required()
      })
    },
    { abortEarly: false }
  ),
  pointsController.create
);

export default routes;
