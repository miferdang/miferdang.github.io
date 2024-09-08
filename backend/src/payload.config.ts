import path from 'path'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { buildConfig } from 'payload/config'

import { viteBundler } from '@payloadcms/bundler-vite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import Media from './collections/Media'
import Pages from './collections/Pages'
import Projects from './collections/Projects'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Experience from './collections/Experience'
import SocialMedia from './globals/SocialMedia'

// Export the build configuration for Payload CMS
export default buildConfig({
	// Configuration for the admin interface
	admin: {
		user: Users.slug,
		bundler: viteBundler(),
	},

	// Configuration for the editor interface
	editor: lexicalEditor({}),

	// Define the collections for the CMS
	collections: [Experience, Media, Pages, Projects, Tags, Users],

	// Define the globals for the CMS
	globals: [SocialMedia],

	// TypeScript configuration
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},

	// GraphQL configuration
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},

	// Plugins to extend functionality
	plugins: [payloadCloud()],

	// Server URL configuration
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,

	// CORS and CSRF settings to ensure security
	cors: [process.env.PAYLOAD_PUBLIC_CLIENT_URL || ''].filter(Boolean),
	csrf: [process.env.PAYLOAD_PUBLIC_CLIENT_URL || ''].filter(Boolean),

	// Rate limiting to prevent abuse
	rateLimit: {
		max: 10000,
		trustProxy: true,
		window: 2 * 60 * 1000,
	},

	// Database configuration
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
})
