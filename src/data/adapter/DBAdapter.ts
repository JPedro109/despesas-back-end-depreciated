import { IDBAdapter } from "./IDBAdapter";
import { MongoClient } from "mongodb";
import { DATABASE_NAME, MONGO_URL } from "../../config";

export class DBAdapter implements IDBAdapter {
    
	mongo: MongoClient;
	collection: string;

	constructor() {
		this.mongo = new MongoClient(MONGO_URL);
	}

	private query(collection: string)  {
		return this
			.mongo
			.db(DATABASE_NAME)
			.collection(collection);
	}

	private mountWhere(where: object): object {
		const whereModified = [];

		for (const key in where) {
			whereModified.push({
				[key]: { $eq: where[`${key}`] }
			});
		}

		return whereModified;
	}

	private setEntityExists(collection: string): void {
		if(collection) this.collection = collection;
	}

	setEntity(collection: string): IDBAdapter {
		this.collection = collection;
		return this;
	}

	async connect(): Promise<void> {
		await this.mongo.connect();
	}

	async closeConnection(): Promise<void> {
		this.mongo.close();
	}

	async insert<Type>(data: Type, collection?: string): Promise<Type> {
		this.setEntityExists(collection);
		
		await this.query(this.collection).insertOne(data);
		return data;
	}

	async getOne<Type>(where: object, operator?: "AND" | "OR", collection?: string): Promise<Type> {
		this.setEntityExists(collection);
		
		if (where && Object?.keys(where).length > 1) {

			if (!operator) throw new Error("Você precisa colocar o operador da operação");

			const whereModified = this.mountWhere(where);

			if (operator === "AND") {

				return await this.query(this.collection).findOne({
					$and: whereModified
				}) as Type;

			}

			if (operator === "OR") {
				return await this.query(this.collection).findOne({
					$or: whereModified
				}) as Type;
			}
		}

		return await this.query(this.collection).findOne(where) as Type;
	}

	async getAll<Type>(where?: object, operator?: "AND" | "OR", collection?: string): Promise<Type[]> {  
		this.setEntityExists(collection);

		if (where && Object?.keys(where).length > 1) {

			if (!operator) throw new Error("Você precisa colocar o operador da operação");
	
			const whereModified = this.mountWhere(where);
	
			if (operator === "AND") {
				return await this.query(this.collection).find({
					$and: whereModified
				}).toArray() as Type[];
			}
	
			if (operator === "OR") {
				return await this.query(this.collection).find({
					$or: whereModified
				}).toArray() as Type[];
			}
		}
	
		return await this
			.query(this.collection)
			.find(where || {})
			.toArray() as Type[];

	}

	async update<Type>(where: object, data: object, collection?: string): Promise<Type> {        
		this.setEntityExists(collection);

		await this.query(this.collection).updateOne(
			where,
			{
				$set: data
			}
		);

		return await this.query(this.collection).findOne(where) as Type;
	}

	async delete<Type>(where: object, collection?: string): Promise<Type> {        
		this.setEntityExists(collection);

		const data = await this.query(this.collection).findOne(where) as Type;
		await this.query(this.collection).deleteOne(where);
		return data as Type;
	}
    
	async deleteMany<Type>(collection?: string): Promise<Type[]> { 
		this.setEntityExists(collection);

		await this.query(this.collection).deleteMany({});
		return this.getAll(null, null, this.collection);
	}
}