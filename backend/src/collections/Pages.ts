import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import { Archive } from '../blocks/Archive'
import Content from '../blocks/Content'
import { Media } from '../blocks/Media'
import SocialMedia from '../globals/SocialMedia'
import { heroField } from '../fields/hero'
import Menus from '../blocks/Menus'
import CallToAction from '../blocks/CallToAction'

const Pages: CollectionConfig = {
	slug: 'pages',
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
			required: true,
			type: 'text',
		},
		{
			type: 'tabs',
			tabs: [
				{
					label: 'Hero',
					fields: [heroField()],
				},
				{
					label: 'Content',
					fields: [
						{
							name: 'layout',
							blocks: [Archive, Content, Media, Menus, CallToAction],
							required: true,
							type: 'blocks',
						},
					],
				},
			],
		},
		{
			name: 'publishedDate',
			type: 'date',
			admin: {
				position: 'sidebar',
			},
		},
	],
}

export default Pages
