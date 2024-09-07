import { TTocs, TContent } from '@/app/_components/TableOfContent/TableOfContent'
import { generateIdFromHeading } from './generateIdFromHeading'

// Utility - render tocs from content rich text blocks
export const getTableOfContent = ({ content, isLayout = false }: TContent): TTocs => {
	// Check - if no content so return empty array
	if (!content?.length) return []

	// Handle - get headings from content
	const headings = content.filter((block: { type?: string; blockName?: string }) => (isLayout ? block.blockName : block.type === 'heading')) || []

	// Check - if no heading so return empty array
	if (!headings.length) return []

	// Handle - genarate tocs from heading
	const tocs: TTocs = headings.map((heading: any) => {
		const label = isLayout ? heading.blockName : heading.children[0].text
		const id = generateIdFromHeading(label)
		return { label, id }
	})

	return tocs
}
