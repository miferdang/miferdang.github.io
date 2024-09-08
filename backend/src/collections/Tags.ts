import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Tags: CollectionConfig = {
	slug: 'tags',
	access: {
		read: () => true,
		create: isAdmin,
		update: isAdmin,
		delete: isAdmin,
	},
	admin: {
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
	],
}

export default Tags
