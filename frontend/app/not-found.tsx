'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import BackHomeButton from './_components/Button/BackHomeButton'
import ErrorLayout from './_layouts/ErrorLayout'

// Page - 404 error
export default function NotFound() {
	const router = useRouter()

	const handleBackHome = useCallback(() => {
		router.push('/')
	}, [router])

	return <ErrorLayout title="Something wen't wrong!" status={404} extra={<BackHomeButton handleClick={handleBackHome} />} />
}
