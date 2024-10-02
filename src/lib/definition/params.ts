export type ProductServiceParams = {
	page?: number | null | undefined;
	pageSize?: number | null | undefined;
	search?: string | null | undefined;
	priceFrom?: number | null | undefined;
	priceTo?: number | null | undefined;
	stockFrom?: number | null | undefined;
	stockTo?: number | null | undefined;
	categoryId?: string | null | undefined;
	tagsId?: string | null | undefined[];
	storeId?: string | null | undefined;
	withStore?: boolean | null | undefined;
	withCategory?: boolean | null | undefined;
	withTags?: boolean | null | undefined;
};

export type ProductCategoryServiceParams = {
	parentId?: string | null | undefined;
	page?: number | null | undefined;
	pageSize?: number | null | undefined;
	search?: number | null | undefined;
	withProduct?: boolean | null | undefined;
};

export type ProductTagServiceParams = {
	page?: number | null | undefined;
	pageSize?: number | null | undefined;
	search?: number | null | undefined;
	storeId?: string | null | undefined;
	withProduct?: boolean | null | undefined;
};
