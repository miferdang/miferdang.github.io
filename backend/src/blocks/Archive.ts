import type { Block } from 'payload/types'

export const Archive: Block = {
	slug: 'archive-block',
	fields: [
		{
			name: 'relationTo',
			label: 'Collections To Show',
			type: 'select',
			defaultValue: 'projects',
			options: [
				{
					label: 'Projects',
					value: 'projects',
				},
				{
					label: 'Experience',
					value: 'experience',
				},
			],
		},
		{
			name: 'limit',
			label: 'Limit',
			type: 'number',
			defaultValue: 10,
			admin: {
				step: 1,
			},
		},
		{
			name: 'seeMore',
			label: 'See More',
			type: 'group',
			fields: [
				{
					name: 'label',
					type: 'text',
				},
				{
					name: 'url',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'populatedDocs',
			label: 'Populated Docs',
			type: 'relationship',
			relationTo: ['projects', 'experience'],
			hasMany: true,
		},
		{
			name: 'populatedDocsTotal',
			label: 'Populated Docs Total',
			type: 'number',
			admin: {
				description: 'This field is auto-populated after-read',
				disabled: true,
				step: 1,
			},
		},
	],
}
