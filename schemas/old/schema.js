// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'myBooks',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  
	//types: schemaTypes.concat([
    /* Your types here! */
//  ]

// my modification is from here


	types: schemaTypes.concat(
		[
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
						title: 'Author',
						name: 'author',
						type: 'string'
					},
					{
						title: 'Cover',
						name: 'cover',
						type: 'image'
					},
					{
						title: 'Series Name',
						name: 'seriesName',
						type: 'string'
					},
					{
						title: 'Number of books in series',
						name: 'numberseries',
						type: 'number'
					},
					{
						title: 'Book number in series',
						name: 'bookNumber',
						type: 'number'
					}
				
					

				]
			},
			{
			title: 'My Thoughts',
			name: 'myThoughts',
			type: 'document',
			fields: [
				{
					title: 'Book',
					name: 'book',
					type: 'string'
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
		]
	)


}
)
