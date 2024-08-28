'use client'

import { Flex } from '@radix-ui/themes'
import { styled } from '@stitches/react'
import React, { useEffect, useState } from 'react'
import useCursorEffect from './_hooks/useCursorEffect'
import LoadingLayout from './_layouts/LoadingLayout'

// Styled - cursor component
const Cursor = styled('div', {
	position: 'fixed',
	pointerEvents: 'none',
	width: '600px',
	height: '600px',
	borderRadius: '50%',
	background: 'radial-gradient(circle at center, rgba(29, 78, 216, 0.12), transparent 80%)',
	transform: 'translate(-50%, -50%)',
	transition: 'background 0.3s ease',
	zIndex: 9999,
})

// Define - type of props
type TProps = Readonly<{
	children: React.ReactNode
}>

// Template - root
export default function RootTemplate({ children }: TProps) {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const cursorRef = useCursorEffect()

	// Initial loading
	useEffect(() => {
		setIsLoading(false)
	}, [])

	return isLoading ? (
		<LoadingLayout />
	) : (
		<Flex width='100%' minHeight='100vh' direction='column'>
			{/* Page - dynamic */}
			{children}

			{/* Cursor - effect */}
			<Cursor ref={cursorRef} className='cursor' />
		</Flex>
	)
}
