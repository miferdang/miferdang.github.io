'use client'

import { useEffect } from 'react'
import BackHomeButton from './_components/Button/BackHomeButton'
import ErrorLayout from './_layouts/ErrorLayout'

// Page - 500 error
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	// Initial loading - log the error to an error reporting service
	useEffect(() => {
		console.error(error)
	}, [error])

	return <ErrorLayout title='Something went wrong!' status={500} extra={<BackHomeButton handleClick={reset} />} />
}
