// Then we give our schema to the builder and provide the result to Sanity
export default 
{
// book titles
title: 'My Books',
name: 'book',
type: 'document',
fields: [
			{
				title: 'Book',
				name: 'book',
				type: 'string'
			},
			{
				name: 'author',
				type: 'reference',
				to:
				[
					{type: 'author'},
				]
			},
			{
				title: 'Cover',
				name: 'cover',
				type: 'image'
			},
			{
				name: 'series',
				type: 'reference',
				to:
				[
					{type: 'series'},
				]
			},
			{
				title: 'Book number in series',
				name: 'bookNumber',
				type: 'number'
			}
		]
}
