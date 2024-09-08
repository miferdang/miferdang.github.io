import { BlocksFeature, HTMLConverterFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Field } from 'payload/types'
import CallToAction from '../blocks/CallToAction'

type Link = () => Field

export const richTextField: Link = () => ({
	name: 'richText',
	label: 'Rich Text',
	type: 'richText',
	editor: lexicalEditor({
		features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({}), BlocksFeature({ blocks: [CallToAction] })],
	}),
})
