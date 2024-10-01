export type ProductModel = {
	storeId?: string;
	categoryId?: string;
	tagsId?: string[];
	name?: string;
	description?: string;
	price?: number;
	stock?: number;
};

export type ProductCategoryModel = {
	parentId: string | null;
	description: string;
};

export type ProductTagModel = {
	storeId: string;
	description: string;
};
