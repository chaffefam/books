// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import mybooks from './mybooks';
import mythoughts from './mythoughts';
import author from './author';
import series from './series'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  	name: 'myBooks',
	types: schemaTypes.concat(
		[
			mybooks,
			author,
			mythoughts,
			series
		]
	)
}
)
