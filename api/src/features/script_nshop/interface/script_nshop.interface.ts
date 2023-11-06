/**
 * To query all available attributes see https://tiendanube.github.io/api-documentation/resources/product
 */

export interface IScriptNShopRequest {
  script_id: string;
  script_name: string;
}

export interface IScriptNShopResponse extends IScriptNShopRequest {
  script_src: string;
  script_event: string;
  script_where: string;
  script_description: string;
}
