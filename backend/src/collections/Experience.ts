import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import { linkField } from '../fields/link'

const Experience: CollectionConfig = {
	slug: 'experience',
	versions: {
		drafts: true,
	},
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
		{
			name: 'description',
			type: 'text',
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'time',
			type: 'group',
			fields: [
				{
					name: 'startingTime',
					type: 'date',
				},
				{
					name: 'endingTime',
					type: 'date',
				},
			],
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'position',
			type: 'select',
			hasMany: true,
			options: ['Front-end Developer', 'UI-UX Designer', 'Full-stack Developer', 'Wordpress Developer'],
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'projects',
			type: 'relationship',
			relationTo: 'projects',
			hasMany: true,
		},
		{
			name: 'tools',
			type: 'relationship',
			relationTo: 'tags',
			hasMany: true,
			admin: {
				position: 'sidebar',
			},
		},
	],
}

export default Experience
