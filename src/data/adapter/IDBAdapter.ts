export interface IDBAdapter {
	connect(): Promise<void>
	closeConnection(): Promise<void>
	setEntity(collection: string): IDBAdapter;
	insert<Type>(data: Type, collection?: string): Promise<Type>;
	getOne<Type>(where: object, operator?: "AND" | "OR", collection?: string): Promise<Type>;
	getAll<Type>(where?: object, operator?: "AND" | "OR", collection?: string): Promise<Type[]>;
	update<Type>(where: object, data: object, collection?: string): Promise<Type>;
	delete<Type>(where: object, collection?: string): Promise<Type>;
	deleteMany<Type>(collection?: string): Promise<Type[]>;
}