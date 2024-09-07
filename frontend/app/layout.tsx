import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'

import './globals.css'
import ApolloProvider from './_providers/ApolloProvider'

// Define - type of props
type TProps = Readonly<{
	children: React.ReactNode
}>

// Config - meta tag information
export const metadata: Metadata = {
	title: 'Mifer Dang',
	description: 'Front-end Developer',
}

// Config - font
const beVietnamPro = Be_Vietnam_Pro({
	subsets: ['latin', 'latin-ext', 'vietnamese'],
	weight: ['400', '500', '600', '700'],
})

// Layout - root layout
export default function RootLayout({ children }: TProps) {
	return (
		<html lang='en'>
			<body className={beVietnamPro.className}>
				<ApolloProvider>
					<Theme appearance='dark' radius='medium' scaling='100%' panelBackground='translucent'>
						{children}
					</Theme>
				</ApolloProvider>
			</body>
		</html>
	)
}
