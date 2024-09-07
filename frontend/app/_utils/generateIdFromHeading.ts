// Utility - generate id from text
export const generateIdFromHeading = (heading: string): string => {
	return heading
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]/g, '')
}
