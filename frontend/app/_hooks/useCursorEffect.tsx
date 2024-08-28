import { useEffect, useRef } from 'react'

// Hook - use mouse effect background
const useCursorEffect = () => {
	const cursorRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const cursor = cursorRef.current

		// Handler - update cursor position based on mouse movement
		const handleMouseMove = (e: MouseEvent) => {
			if (cursor) {
				cursor.style.left = `${e.clientX}px`
				cursor.style.top = `${e.clientY}px`
			}
		}

		// Attach - the mousemove event listener to the window
		window.addEventListener('mousemove', handleMouseMove)

		// Cleanup -  function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	})

	return cursorRef
}

export default useCursorEffect
