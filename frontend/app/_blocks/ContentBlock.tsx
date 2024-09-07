import { Code, Text } from '@radix-ui/themes'
import type { SerializedElementNode, SerializedLexicalNode, SerializedTextNode } from 'lexical'
import Link from 'next/link'
import { Fragment } from 'react'

// Text node formatting
export const IS_BOLD = 1
export const IS_ITALIC = 1 << 1
export const IS_STRIKETHROUGH = 1 << 2
export const IS_UNDERLINE = 1 << 3
export const IS_CODE = 1 << 4
export const IS_SUBSCRIPT = 1 << 5
export const IS_SUPERSCRIPT = 1 << 6
export const IS_HIGHLIGHT = 1 << 7

type TProps = Readonly<{
	nodes: SerializedLexicalNode[]
}>

const ContentBlock = ({ nodes }: TProps) => {
	return (
		<Fragment>
			{nodes?.map((_node, idx) => {
				if (_node.type === 'text') {
					const node = _node as SerializedTextNode
					let text = <Text dangerouslySetInnerHTML={{ __html: node.text }} key={idx} />
					if (node.format & IS_BOLD) {
						text = (
							<Text key={idx} weight='bold'>
								{text}
							</Text>
						)
					}
					if (node.format & IS_ITALIC) {
						text = <em key={idx}>{text}</em>
					}
					if (node.format & IS_STRIKETHROUGH) {
						text = (
							<Text key={idx} style={{ textDecoration: 'line-through' }}>
								{text}
							</Text>
						)
					}
					if (node.format & IS_UNDERLINE) {
						text = (
							<Text key={idx} style={{ textDecoration: 'underline' }}>
								{text}
							</Text>
						)
					}
					if (node.format & IS_CODE) {
						text = <Code key={idx}>{text}</Code>
					}
					if (node.format & IS_SUBSCRIPT) {
						text = <sub key={idx}>{text}</sub>
					}
					if (node.format & IS_SUPERSCRIPT) {
						text = <sup key={idx}>{text}</sup>
					}
					if (node.format & IS_HIGHLIGHT) {
						text = <mark key={idx}>{text}</mark>
					}
					return text
				}

				const serializedChildrenFn = (node: SerializedElementNode): JSX.Element | null => {
					if (node.children == null) {
						return null
					} else {
						return ContentBlock({ nodes: node.children })
					}
				}

				const serializedChildren = 'children' in _node ? serializedChildrenFn(_node as SerializedElementNode) : ''

				switch (_node.type) {
					case 'paragraph': {
						return <p key={idx}>{serializedChildren}</p>
					}
					case 'link': {
						const node = _node as any
						return (
							<Link
								key={idx}
								href={node.fields.url}
								rel={node.fields.newTab ? 'noopener noreferrer' : undefined}
								target={node.fields.newTab ? '_blank' : undefined}
							>
								{serializedChildren}
							</Link>
						)
					}
					default:
						return null
				}
			})}
		</Fragment>
	)
}

export default ContentBlock
