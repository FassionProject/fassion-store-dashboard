import { BASE_PRODUCT_CATEGORY_ENDPOINT } from '@/lib/constants';
import { ProductCategoryParams, ReponseData } from '@/lib/definition';
import { ProductCategoryModel } from '@/lib/model';
import { GetClient, PatchClient, PostClient } from 'lib/http_client';

export const getProductCategories = async (productCategoryParams: ProductCategoryParams): Promise<ReponseData> => {
	return await GetClient(BASE_PRODUCT_CATEGORY_ENDPOINT, productCategoryParams);
};

export const getProductCategoryByID = async (ID: string): Promise<ReponseData> => {
	return await GetClient(`${BASE_PRODUCT_CATEGORY_ENDPOINT}/${ID}`, { ID });
};

export const insertNewProductCategory = async (productCategory: ProductCategoryModel): Promise<ReponseData> => {
	return await PostClient(BASE_PRODUCT_CATEGORY_ENDPOINT, productCategory);
};

export const updateProductCategoryData = async (productCategory: ProductCategoryModel): Promise<ReponseData> => {
	return await PatchClient(BASE_PRODUCT_CATEGORY_ENDPOINT, productCategory);
};
