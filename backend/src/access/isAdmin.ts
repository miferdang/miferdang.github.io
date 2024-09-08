import type { Access } from 'payload/types'
import type { User } from '@/payload-types'

// Checks if the user has an 'admin' role
export const isAdmin: Access<any, User> = ({ req: { user } }) => {
	return Boolean(user?.roles?.includes('admin'))
}
