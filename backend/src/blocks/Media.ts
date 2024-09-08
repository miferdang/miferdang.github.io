import type { Block } from 'payload/types'

export const Media: Block = {
	slug: 'media-block',
	fields: [
		{
			name: 'media',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
	],
}
