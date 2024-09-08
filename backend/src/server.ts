import express from 'express'
import payload from 'payload'

// Load environment variables from the .env file
require('dotenv').config({
	path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
})

// Initialize an Express application
const app = express()

// Get the port from environment variables or use default port 5000
const PORT = process.env.PAYLOAD_PUBLIC_SERVER_PORT || 5000

// Define the root route to redirect users to the Payload admin panel
app.get('/', (_, res) => {
	res.redirect('/admin')
})

// Function to start the application
const start = async () => {
	// Initialize Payload CMS with configuration from environment variables
	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
		},
	})

	// Start the Express server to listen on the specified port
	app.listen(PORT)
}

// Call the start function to initialize and run the application
start()
