import type { Experience } from '@/graphql/codegen/graphql'
import { Badge, Card, Flex, Heading, Text } from '@radix-ui/themes'
import { styled } from '@stitches/react'
import { LinkIcon } from 'lucide-react'
import moment from 'moment'
import Link from 'next/link'

const CardStyle = styled(Card, {
	'&:hover': {
		background: 'rgba(30,41,59,.5)',
	},
})

type TProps = Readonly<{ props: Experience }>

const ExperienceCard = ({ props }: TProps) => {
	return (
		<CardStyle variant='ghost' my='2' className='py-4'>
			<Flex gap='4' align='start'>
				{/* Component - time */}
				<Flex gap='4' minWidth={{ initial: '60px', lg: '120px' }}>
					<Text size='2' className='text-gray-9' weight='medium'>
						{moment(props.time?.startingTime).format('YYYY')} — {moment(props.time?.endingTime).format('YYYY')}
					</Text>
				</Flex>

				{/* Component - information */}
				<Flex direction='column' gap='2'>
					{/* Title - title */}
					<Heading as='h6' size='3' className='text-gray-contrast'>
						{props.title}
					</Heading>

					{/* Text - description */}
					<Text size='2' mb='1'>
						{props.description}
					</Text>

					{/* Tag - projects */}
					<Flex gap='2' mb='2' wrap='wrap'>
						{props?.projects?.length
							? props.projects.map((project, idx) => (
									<Flex gap='2' align='center' key={idx}>
										<LinkIcon size='16' />
										<Link
											key={idx}
											href={project.link || ''}
											replace
											className='text-sm text-gray-contrast hover:text-green-track'
											target='blank'
										>
											{project.name}
										</Link>
									</Flex>
								))
							: null}
					</Flex>

					{/* Tag - tools */}
					<Flex gap='2' wrap='wrap'>
						{props?.tools?.length
							? props.tools.map((tool, idx) => (
									<Badge key={idx} color='teal' radius='full' size='2'>
										{tool.title}
									</Badge>
								))
							: null}
					</Flex>
				</Flex>
			</Flex>
		</CardStyle>
	)
}

export default ExperienceCard
