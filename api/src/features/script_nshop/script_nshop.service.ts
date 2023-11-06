import { tiendanubeApiClient } from "@config";
import { IScriptNShopRequest, IScriptNShopResponse } from "@features/script_nshop";
const database = require("../../database/connection");

class ScriptNShopService {
  async findAll(): Promise<IScriptNShopRequest []> {
    return this.findAllFromApi();
  }

  private async findAllFromApi(): Promise<IScriptNShopResponse[]> {
    return (
      await database.select('*').from('eabc_script_js')
    ) as IScriptNShopResponse[];
  }
}

export default new ScriptNShopService();
