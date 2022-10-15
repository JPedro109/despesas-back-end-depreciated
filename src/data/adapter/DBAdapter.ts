import { Database } from "../mongodb";
import { IDBAdapter } from "./IDBAdapter";

export class DBAdapter<Type> implements IDBAdapter<Type> {
    
	database: Database;
	collection: string;

	constructor(collection: string){
		this.database = new Database();
		this.database.connect();
		this.collection = collection;
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

	async insert(data: Type): Promise<Type> {
		await this.database.query(this.collection).insertOne(data);
		return data;
	}

	async getOne(where: object, operator?: "AND" | "OR"): Promise<Type> {
		if (Object.keys(where).length > 1) {

			if (!operator) throw new Error("Você precisa colocar o operador da operação");

			const whereModified = this.mountWhere(where);

			if (operator === "AND") {

				return await this.database.query(this.collection).findOne({
					$and: whereModified
				}) as Type;

			}

			if (operator === "OR") {
				return await this.database.query(this.collection).findOne({
					$or: whereModified
				}) as Type;
			}
		}

		return await this.database.query(this.collection).findOne(where) as Type;
	}

	async getAll(where?: object, operator?: "AND" | "OR"): Promise<Type[]> {
        
		if (Object.keys(where).length > 1) {

			if (!operator) throw new Error("Você precisa colocar o operador da operação");
	
			const whereModified = this.mountWhere(where);
	
			if (operator === "AND") {
				return await this.database.query(this.collection).find({
					$and: whereModified
				}).toArray() as Type[];
			}
	
			if (operator === "OR") {
				return await this.database.query(this.collection).find({
					$or: whereModified
				}).toArray() as Type[];
			}
		}
	
		return await this.
			database
			.query(this.collection)
			.find(where || {})
			.toArray() as Type[];

	}

	async update(where: object, data: object): Promise<Type> {
		await this.database.query(this.collection).updateOne(
			where,
			{
				$set: data
			}
		);

		return await this.database.query(this.collection).findOne(where) as Type;
	}

	async delete(where: object): Promise<Type> {
		const data = await this.database.query(this.collection).findOne(where) as Type;
		await this.database.query(this.collection).deleteOne(where);
		return data as Type;
	}
    
	async deleteMany(): Promise<Type[]> {
		await this.database.query(this.collection).deleteMany({});
		return this.getAll();
	}   
}