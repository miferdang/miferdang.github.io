import type { Block } from 'payload/types'
import { linkField } from '../fields/link'

const CallToAction: Block = {
	slug: 'call-to-action-block',
	fields: [linkField()],
}

export default CallToAction
