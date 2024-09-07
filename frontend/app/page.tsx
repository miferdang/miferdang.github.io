'use client'

import { GetHomePageDocument, GetHomePageQuery, GetSocialMediaDocument, GetSocialMediaQuery, Page } from '@/graphql/codegen/graphql'
import { useSuspenseQuery } from '@apollo/client'
import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes'
import { styled } from '@stitches/react'
import Blocks from './_components/Blocks/Blocks'
import SocialMedia from './_components/SocialMedia/SocialMedia'
import TableOfContent from './_components/TableOfContent/TableOfContent'

const BlocksStyle = styled(Flex, {
	'.rt-r-weight-bold': {
		fontWeight: 'var(--font-weight-medium)',
		color: 'var(--gray-12)',
	},
})

// Page - home
export default function Home() {
	const { data: pageData }: { data: GetHomePageQuery } = useSuspenseQuery(GetHomePageDocument)
	const { hero, layout } = pageData?.Page || {}
	const { data: socialMediaData }: { data: GetSocialMediaQuery } = useSuspenseQuery(GetSocialMediaDocument)
	const { icons } = socialMediaData?.SocialMedia || {}

	return (
		<Container px={{ initial: '4', sm: '8' }} size='4' minHeight='100vh'>
			<Flex className='md:flex-row flex-col' minHeight='100vh'>
				{/* Column left - heading */}
				<Flex
					direction='column'
					py={{ initial: '4', lg: '8' }}
					gap='8'
					className='basis-[48%] md:sticky lg:top-0 lg:h-full lg:min-h-100 lg:min-h-screen'
				>
					<Flex direction='column' gap='4'>
						<Heading as='h1' size='9' mt='4'>
							{hero?.title}
						</Heading>
						<Heading as='h2' size='5' weight='medium'>
							{hero?.description}
						</Heading>
						<Text className='text-gray-11 text-pretty md:max-w-80' mt='2'>
							{hero?.subDescription}
						</Text>
					</Flex>

					{/* Compoennt - table of content */}
					<Box mt={{ lg: '4' }} flexGrow={{ lg: '1' }} mb='2'>
						<TableOfContent content={layout} isLayout={true} />
					</Box>

					{/* Component - social media */}
					<SocialMedia icons={icons as SocialMedia['icons']} />
				</Flex>

				{/* Column right - main content */}
				<BlocksStyle direction='column' py={{ initial: '6', lg: '8' }} gap={{ initial: '4', lg: '8' }} className='basis-[52%] text-gray-11'>
					{layout?.length ? <Blocks layout={layout as Page['layout']} /> : null}
				</BlocksStyle>
			</Flex>
		</Container>
	)
}
