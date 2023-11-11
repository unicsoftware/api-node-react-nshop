import { NextFunction, Request, Response } from "express";
import { StatusCode } from "@utils";
import { ScriptNShopService } from "@features/script_nshop";
import { error } from "console";
import { Script } from "vm";
const database = require("../../database/connection");

class ScriptNShopController {
  healthy(req: Request, res: Response) {
    res.status(200).json({ status: 'OK', message: 'API está saudável' });
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


