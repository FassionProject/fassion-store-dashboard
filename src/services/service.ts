import { ReponseData } from '@/lib/definition';
import { getClient } from './http_client';

const getCatData = async (): Promise<ReponseData> => {
	const endpoint = '/breeds';
	const param: object = { limit: 5 };

	return await getClient(endpoint, param);
};

export { getCatData };
