import { Button } from '@radix-ui/themes'
import { ArrowLeftIcon } from 'lucide-react'

// Type - props
type TProps = {
	handleClick: () => void
}

// Component - button back to home page
const BackHomeButton = ({ handleClick }: TProps) => {
	return (
		<Button variant='outline' highContrast onClick={handleClick}>
			<ArrowLeftIcon />
			Back to Home Page
		</Button>
	)
}

export default BackHomeButton
