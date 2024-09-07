import ContentBlock from '@/app/_blocks/ContentBlock'
import { Page } from '@/graphql/codegen/graphql'
import { Flex, Heading } from '@radix-ui/themes'
import { Fragment } from 'react'
import ArchiveBlock from '../../_blocks/ArchiveBlock'
import { generateIdFromHeading } from '../../_utils/generateIdFromHeading'

const Blocks = ({ layout }: { layout: Page['layout'] }) => {
	return (
		<Fragment>
			{layout?.map((block, idx) => {
				const renderBlock = () => {
					switch (block?.__typename) {
						case 'ContentBlock': {
							return <ContentBlock key={idx} nodes={block.richText?.root?.children} />
						}
						case 'ArchiveBlock': {
							return <ArchiveBlock key={idx} populatedDocs={block.populatedDocs} seeMore={block.seeMore} />
						}
					}
				}

				const headingId = 'blockName' in block && block?.blockName ? generateIdFromHeading(block?.blockName as string) : ''

				return (
					<Flex direction='column' gap='4' my='2' key={idx}>
						<Heading as='h6' hidden id={headingId}>
							{'blockName' in block && block?.blockName}
						</Heading>
						{renderBlock()}
					</Flex>
				)
			})}
		</Fragment>
	)
}

export default Blocks
