import { linkField } from '../fields/link'
import type { Block } from 'payload/types'

const Menus: Block = {
	slug: 'menus-block',
	fields: [
		{
			name: 'menus',
			type: 'array',
			maxRows: 6,
			fields: [linkField()],
		},
	],
}

export default Menus
