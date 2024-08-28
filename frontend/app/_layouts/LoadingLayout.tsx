import { Flex, Spinner } from '@radix-ui/themes'

// Layout - page loading
const LoadingLayout = () => {
	return (
		<Flex align='center' justify='center' minHeight='100vh' p='4'>
			<Spinner size='3' />
		</Flex>
	)
}

export default LoadingLayout
