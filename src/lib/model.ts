export type ProductModel = {
	id: string;
	storeId: string;
	categoryId: string;
	name: string;
	description: string;
	thumbnail: string | null;
	price: number;
	stock: number;
	createdAt: string;
	createdBy: string;
	createdIp: string;
	updatedAt: string;
	updatedBy: string;
	updatedIp: string;
	deletedAt: string | null;
	deletedBy: string | null;
	deletedIp: string | null;
};

export type ProductCategoryModel = {
	parentId: string | null;
	description: string;
};

export type ProductTagModel = {
	storeId: string;
	description: string;
};
