import type { GlobalConfig } from 'payload/types'
import { iconField } from '../fields/icon'

const SocialMedia: GlobalConfig = {
	slug: 'social-media',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'icons',
			type: 'array',
			maxRows: 6,
			fields: [iconField()],
		},
	],
}

export default SocialMedia
