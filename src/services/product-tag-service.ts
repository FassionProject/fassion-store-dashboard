import { BASE_PRODUCT_TAG_ENDPOINT } from '@/lib/constants';
import { ProductTagParams, ReponseData } from '@/lib/definition';
import { ProductTagModel } from '@/lib/model';
import { GetClient, PatchClient, PostClient } from 'lib/http_client';

export const getProductTags = async (productTagParams: ProductTagParams): Promise<ReponseData> => {
	return await GetClient(BASE_PRODUCT_TAG_ENDPOINT, productTagParams);
};

export const getProductTagByID = async (ID: string): Promise<ReponseData> => {
	return await GetClient(`${BASE_PRODUCT_TAG_ENDPOINT}/${ID}`, { ID });
};

export const insertNewProductTag = async (productTag: ProductTagModel): Promise<ReponseData> => {
	return await PostClient(BASE_PRODUCT_TAG_ENDPOINT, productTag);
};

export const updateProductTagData = async (productTag: ProductTagModel): Promise<ReponseData> => {
	return await PatchClient(BASE_PRODUCT_TAG_ENDPOINT, productTag);
};
