import type { Field } from 'payload/types'
import { linkField } from './link'

type Icon = () => Field

export const iconField: Icon = () => ({
	name: 'icon',
	label: 'Icon',
	type: 'group',
	index: true,
	fields: [
		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'link',
			type: 'text',
			required: true,
		},
	],
})
