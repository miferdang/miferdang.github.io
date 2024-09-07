import type { SocialMedia } from '@/graphql/codegen/graphql'
import { Flex } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'

const SocialMedia = ({ icons }: { icons: SocialMedia['icons'] }) => {
	return (
		<Flex gap="6">
			{icons?.length
				? icons.map(({ id, icon }) => {
						return (
							<Link key={id} className='flex items-center gap-4' href={icon?.link || ''} target='blank'>
								<Image width={26} height={26} src={icon?.image?.url || ''} alt='' />
							</Link>
						)
					})
				: null}
		</Flex>
	)
}

export default SocialMedia
