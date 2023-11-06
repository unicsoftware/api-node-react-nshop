import { NextFunction, Request, Response } from "express";
import { StatusCode } from "@utils";
import { ScriptNShopService } from "@features/script_nshop";
import { error } from "console";
import { Script } from "vm";
const database = require("../../database/connection");

class ScriptNShopController {
  scripListAll(req: Request, res: Response) {
    console.log("Cheguei no Controller");
    res.send("AGora sim");
  }

  async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await ScriptNShopService.findAll();
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }

}

export default new ScriptNShopController();


