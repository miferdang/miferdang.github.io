import type { Field } from 'payload/types'

type Link = () => Field

export const linkField: Link = () => ({
	name: 'link',
	label: 'Link',
	type: 'group',
	index: true,
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
})
