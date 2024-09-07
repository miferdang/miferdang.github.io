import type { ArchiveBlock, Experience, Project } from '@/graphql/codegen/graphql'
import { Fragment } from 'react'
import ExperienceCard from '../_components/Card/ExperienceCard'
import ProjectCard from '../_components/Card/ProjectCard'
import { Flex } from '@radix-ui/themes'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

const ArchiveBlock = ({ populatedDocs, seeMore }: { populatedDocs?: ArchiveBlock['populatedDocs']; seeMore?: ArchiveBlock['seeMore'] }) => {
	return (
		<Flex direction='column' gap='4'>
			{populatedDocs
				? populatedDocs.map((archive, idx) => {
						switch (archive.relationTo) {
							case 'experience':
								return <ExperienceCard key={idx} props={archive.value as Experience} />
							case 'projects':
								return <ProjectCard key={idx} props={archive.value as Project} />
							default:
								return null
						}
					})
				: null}

			{seeMore?.label && (
				<Flex gap='2' align='center'>
					<Link href={seeMore?.url || ''} className='text-gray-11 font-bold' target='blank'>
						{seeMore?.label}
					</Link>

					<MoveRight size='16' />
				</Flex>
			)}
		</Flex>
	)
}

export default ArchiveBlock
