import path from 'path'
import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Media: CollectionConfig = {
	slug: 'media',
	upload: {
		staticDir: path.resolve(__dirname, '../media'),
		mimeTypes: ['image/*', 'application/pdf'],
	},
	access: {
		read: () => true,
		create: isAdmin,
		update: isAdmin,
		delete: isAdmin,
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
		},
		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'type',
			type: 'select',
			defaultValue: 'image',
			required: true,
			options: ['image', 'pdf'],
		},
	],
}

export default Media
