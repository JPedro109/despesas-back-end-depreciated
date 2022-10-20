import { IDBAdapter } from "./IDBAdapter";
import { Expense } from "../models/Expense";
import { User } from "../models/User";

export class DBAdapterInMemory implements IDBAdapter {
    
	database: { "user": Array<User>, "expense": Array<Expense> } = { "user": [], "expense": [] };
	collection: string;
    
	private setEntityExists(collection: string) {
		if(collection) {
			this.collection = collection;
		}
	}

	setEntity(collection: string): IDBAdapter {
		this.collection = collection;
		return this;
	}

	async connect(): Promise<void> { 
		Promise.resolve;
	}

	async closeConnection(): Promise<void> {
		Promise.resolve;
	}

	insert<Type>(data: Type, collection?: string): Promise<Type> {
		this.setEntityExists(collection);

		this.database[this.collection].push(data);
		return Promise.resolve(data);
	}

	getOne<Type>(where: object, operator?: "AND" | "OR", collection?: string): Promise<Type> {
		this.setEntityExists(collection);

		const data = [];
		
		this.database[this.collection].forEach((element) => {
			if(operator === "OR") {
				for(const key in where) {
					if(element[key] === where[key]) {
						if(!data.includes(element)) data.push(element);
					}
				}
			}

			if(operator === "AND") {
				let equal = true;
				for(const key in where) {
					if(element[key] !== where[key]) equal = false;
				}

				if(equal) data.push(element);
			}

			if(!operator) {
				for(const key in where) {
					if(element[key] === where[key]) {
						if(!data.includes(element)) data.push(element);
					}
				}
			}

		});

		return Promise.resolve(data?.[0]);
	}

	getAll<Type>(where?: object, operator?: "AND" | "OR", collection?: string): Promise<Type[]> {
		this.setEntityExists(collection);

		if(!where) return this.database[this.collection];
		
		const data = [];
		this.database[this.collection].forEach((element) => {
			if(operator === "OR") {
				for(const key in where) {
					if(element[key] === where[key]) {
						if(!data.includes(element)) data.push(element);
					}
				}
			}

			if(operator === "AND") {
				let equal = true;
				for(const key in where) {
					if(element[key] !== where[key]) equal = false;
				}

				if(equal) data.push(element);
			}

			if(!operator) {
				for(const key in where) {
					if(element[key] === where[key]) {
						if(!data.includes(element)) data.push(element);
					}
				}
			}
		});

		return Promise.resolve(data);
	}

	update<Type>(where: object, data: object, collection?: string): Promise<Type> {
		this.setEntityExists(collection);

		let count = null;
		this.database[this.collection].forEach((element, i) => {
			let equal = true;
			for(const key in where) {
				if(element[key] !== where[key]) equal = false;
			}

			if(equal) count = i;
		});

		const keysOfObject = Object.keys(this.database[this.collection][count]);

		keysOfObject.forEach((element) => {
			if(data[element] !== undefined) this.database[this.collection][count][element] = data[element];
		});

		return Promise.resolve(this.database[this.collection][count]);
	}
    
	delete<Type>(where: object, collection?: string): Promise<Type> {
		this.setEntityExists(collection);

		let count = null;
		this.database[this.collection].forEach((element, i) => {
			let equal = true;
			for(const key in where) {
				if(element[key] !== where[key]) equal = false;
			}

			if(equal) count = i;
		});

		const data = this.database[this.collection][count];

		this.database = this.database[this.collection].splice(count, 1);

		return Promise.resolve(data);
	}

	deleteMany<Type>(collection?: string): Promise<Type[]> {
		this.setEntityExists(collection);
		
		this.database[this.collection] = [];
		return Promise.resolve(this.database[this.collection]);
	}
}