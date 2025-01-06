import { createProductDTO } from "../dtos/product.dto";
import { Product } from "@prisma/client";

export interface productServices{
    addProduct(data: createProductDTO): Promise<Product>
    deleteProduct(id: number): Promise<Product | null>
    getAllProducts(): Promise<Product[]>
}