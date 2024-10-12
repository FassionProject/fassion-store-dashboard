type BaseModel = {
	id: string;
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

export type ProductModel = BaseModel & {
	storeId: string;
	categoryId: string;
	name: string;
	description: string;
	thumbnail: string | null;
	price: number;
	stock: number;
};

export type ProductCategoryModel = {
	parentId: string | null;
	description: string;
};

export type ProductTagModel = BaseModel & {
	storeId: string;
	description: string;
};
