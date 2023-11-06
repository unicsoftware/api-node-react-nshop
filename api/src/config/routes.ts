import { Router } from "express";
import passport from "passport";

import { AuthenticationController } from "@features/auth";
import { ProductController } from "@features/product";
import { ScriptNShopController} from "@features/script_nshop";

const routes = Router();
routes.get("/auth/install", AuthenticationController.install);
routes.post(
  "/products",
  passport.authenticate("jwt", { session: false }),
  ProductController.create
);

routes.get(
  "/products/total",
  passport.authenticate("jwt", { session: false }),
  ProductController.getTotal
);
routes.get(
  "/products",
  passport.authenticate("jwt", { session: false }),
  ProductController.getAll
);
routes.delete(
  "/products/:id",
  passport.authenticate("jwt", { session: false }),
  ProductController.delete
);

routes.get(
  "/scripListAll",  
  ScriptNShopController.scripListAll
);
routes.get(
  "/scripList",  
  ScriptNShopController.getAll
);
export default routes;
