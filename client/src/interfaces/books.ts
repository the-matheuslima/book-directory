import { MouseEvent } from 'react';

export interface IBooks {
	isbn: string;
	title: string;
	subtitle: string;
	author: string;
	publisher: string;
	pages: number;
	description: string;
	website: string;
}

export interface IBooksSubmit {
	title: string;
	id?: string;
	subtitle: string;
	author: string;
	publisher: string;
	description: string;
	website: string;
	e: MouseEvent;
}
