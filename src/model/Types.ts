export interface Post {
	id: number;
	image: string;
	name: string;
	excerpt: string
	date: string;
	categoryId: number;
	type: number
}

export interface Category {
    id: number;
    name: string;
    description: string;
}