export class Product{
	constructor(
	public title: string,
    public description: string,
    public image: string,
    public price: number,
    public category: Array<string>,
    public size: string,
    public color:Array<string>
	){}

} 