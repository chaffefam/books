export default 
{
title: 'My Thoughts',
name: 'myThoughts',
type: 'document',
fields: [
			{
				name: 'book',
				type: 'reference',
				to: [
					{type: 'book'},
				]
			},
			{
				title: 'Comments',
				name: 'comments',
				type: 'string'
			},
			{
				title: 'Worth Reading',
				name: 'worthReading',
				type: 'string'
			}
		]
}
