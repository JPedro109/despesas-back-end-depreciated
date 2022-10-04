import { DATABASE_NAME, MONGO_URL } from "../../config";
import { MongoClient } from "mongodb";

export class Database {

	mongo:  MongoClient;

	constructor() {
		this.mongo = new MongoClient(MONGO_URL);
	}

	async connect(): Promise<void> {
		await this.mongo.connect();
	}

	async closeConnection(): Promise<void> {
		await this.mongo.close();
	}

	query(collection: string)  {
		return this
			.mongo
			.db(DATABASE_NAME)
			.collection(collection);
	}
}