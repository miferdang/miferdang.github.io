import { richTextField } from '../fields/richText'
import type { Block } from 'payload/types'

const Content: Block = {
	slug: 'content-block',
	fields: [richTextField()],
}

export default Content
