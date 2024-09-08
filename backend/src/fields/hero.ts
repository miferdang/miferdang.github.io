import type { Field } from 'payload/types'

type Hero = () => Field

export const heroField: Hero = () => ({
	name: 'hero',
	label: 'Hero',
	type: 'group',
	index: true,
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'description',
			type: 'text',
			required: true,
		},
		{
			name: 'subDescription',
			type: 'text',
		},
	],
})
