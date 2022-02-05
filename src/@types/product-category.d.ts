declare module IProductCategory {
  export interface Data {
    code: number;
    total: number;
    pages: number;
    data: IProductData.Category[];
  }
}
