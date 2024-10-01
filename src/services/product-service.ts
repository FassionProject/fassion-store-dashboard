import { BASE_PRODUCT_ENDPOINT } from '@/lib/constants';
import { ProductParams, ReponseData } from '@/lib/definition';
import { ProductModel } from '@/lib/model';
import { GetClient, PatchClient, PostClient } from 'lib/http_client';

export const getProducts = async (productParams: ProductParams): Promise<ReponseData> => {
	return await GetClient(BASE_PRODUCT_ENDPOINT, productParams);
};

export const getProductByID = async (ID: string): Promise<ReponseData> => {
	return await GetClient(`${BASE_PRODUCT_ENDPOINT}/${ID}`, { ID });
};

export const insertNewProduct = async (product: ProductModel): Promise<ReponseData> => {
	return await PostClient(BASE_PRODUCT_ENDPOINT, product);
};

export const updateProductData = async (product: ProductModel): Promise<ReponseData> => {
	return await PatchClient(BASE_PRODUCT_ENDPOINT, product);
};
