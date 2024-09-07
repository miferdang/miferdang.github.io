import { imageLoader } from '@/app/_utils/imageLoader'
import type { Project } from '@/graphql/codegen/graphql'
import { Badge, Card, Flex, Heading, Text } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'

type TProps = Readonly<{ props: Project }>

const ProjectCard = ({ props }: TProps) => {
	return (
		<Card variant='ghost' my='4'>
			<Flex gap='4' align='start' direction={{ initial: 'column', md: 'row' }}>
				{/* Image - thumbnail */}
				<Image className='mt-1 rounded w-full lg:w-48' width={200} height={200} loader={imageLoader} src={props.thumbnail?.url || ''} alt={''} />

				{/* Component - information */}
				<Flex direction='column' gap='2'>
					{/* Title - title */}
					<Heading as='h6' size='3' className='text-gray-contrast hover:text-green-track'>
						<Link href={props.link || ''} target='blank'>
							{props.name}
						</Link>
					</Heading>

					{/* Text - description */}
					<Text size='2' mb='2'>
						{props.description}
					</Text>

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
		</Card>
	)
}

export default ProjectCard
