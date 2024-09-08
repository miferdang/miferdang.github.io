import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Users: CollectionConfig = {
	slug: 'users',
	timestamps: true,
	auth: {
		tokenExpiration: 7200,
		verify: true,
		maxLoginAttempts: 5,
		lockTime: 600 * 1000,
	},
	admin: {
		useAsTitle: 'email',
		defaultColumns: ['email', 'roles'],
	},
	access: {
		read: () => true,
		create: isAdmin,
		update: isAdmin,
		delete: isAdmin,
	},
	fields: [
		{
			type: 'row',
			fields: [
				{
					name: 'firstName',
					type: 'text',
					defaultValue: '',
					required: true,
				},
				{
					name: 'lastName',
					type: 'text',
					defaultValue: '',
					required: true,
				},
			],
		},
		{
			name: 'email',
			type: 'email',
			unique: true,
		},
		{
			name: 'avatar',
			type: 'upload',
			relationTo: 'media',
		},
		{
			name: 'roles',
			type: 'select',
			defaultValue: ['user'],
			hasMany: true,
			options: [
				{
					label: 'admin',
					value: 'admin',
				},
				{
					label: 'user',
					value: 'user',
				},
			],
		},
	],
}

export default Users
