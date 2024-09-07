'use client'
import { getTableOfContent } from '@/app/_utils/getTableOfContent'
import { Box, Flex, Link, Text } from '@radix-ui/themes'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

// Define - type of content
export type TContent = {
	content: any
	isLayout?: boolean
}

// Define - type of tocs
export type TTocs = {
	id: string
	label?: string
}[]

// Component - table of content
const TableOfContent = ({ content, isLayout = false }: TContent) => {
	const [currentTocId, setCurrentTocId] = useState<string>(window.location.hash.substring(1))
	const pathname = usePathname()
	const router = useRouter()

	// Handle - navigate to tocId
	const navigateToTocId = useCallback(
		(tocId: string) => {
			router.push(`${pathname}#${tocId}`)
			setCurrentTocId(tocId)
		},
		[router, pathname],
	)

	// Define - get tocs from content
	const tocs: TTocs = getTableOfContent({ content, isLayout })

	return (
		<Flex direction='column' gap='4'>
			{/* List - tocs */}
			{tocs.length
				? tocs.map((toc, idx: number) => (
						<Link key={idx} className='flex items-center gap-4' onClick={() => navigateToTocId(toc?.id)}>
							<Box
								as='span'
								width={currentTocId === toc?.id ? '60px' : '32px'}
								height='2px'
								className={currentTocId === toc?.id ? 'bg-gray-contrast' : 'bg-gray-8'}
							/>
							<Text
								as='span'
								size='2'
								weight='medium'
								className={`uppercase ${currentTocId === toc?.id ? 'text-gray-contrast' : 'text-gray-10'} hover:text-green-track cursor-pointer`}
							>
								{toc?.label}
							</Text>
						</Link>
					))
				: null}
		</Flex>
	)
}

export default TableOfContent
