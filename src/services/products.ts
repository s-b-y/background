import { get, post, put, del } from "../utils/request";

/**
 * 获取列表
 * @param params
 * @returns
 */
export const loadModelsAPI = (params: any): Promise<IProductData.Data> =>
  get("/api/v1/admin/product", params);

/**
 * 根据id获取商品详情
 * @param id
 * @returns
 */
export const loadModelById = (id: string): Promise<IProductData.Product> =>
  get("/api/v1/admin/product/" + id, {});

/**
 * 新增
 * @param data
 * @returns
 */
export const insertModel = (data: any) => post("/api/v1/admin/product", data);

/**
 * 根据id修改
 * @param id
 * @param data
 * @returns
 */
export const modifyById = (id: string, data: any) =>
  put("/api/v1/admin/product/" + id, data);

/**
 * 根据id删除
 * @param id
 * @returns
 */
export const delById = (id: string) => del("/api/v1/admin/product/" + id);
