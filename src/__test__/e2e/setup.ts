import { dbAdapter } from "../../data/adapter";
import { mockRepository } from "../../data/repositories/MockRepository";

export const setup = () => {
	beforeAll(async () => {
		await dbAdapter.connect();
		await mockRepository.create();
	});

	afterAll(async () => {
		await mockRepository.delete();
		await dbAdapter.closeConnection();
	});
};