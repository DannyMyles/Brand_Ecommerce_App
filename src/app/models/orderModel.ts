import { Product } from "./productModel";
export class Order{
	constructor(
	public userId: string,
    public products: Array<Product>,
    public totalAmount: string,
    public address: number,
    public status: string,
	){}
}