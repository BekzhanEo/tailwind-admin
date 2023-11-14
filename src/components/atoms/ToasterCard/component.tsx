import type { ReactElement } from 'react'

interface Properties {
	readonly toasterText: string
}

export default function ToasterCard({ toasterText }: Properties): ReactElement {
	return (
		<div className='my-4 rounded bg-infoToasterBg dark:bg-infoToasterText'>
			<p className='whitespace-normal p-3 font-bold text-infoToasterText dark:text-infoToasterBg'>
				{toasterText}
			</p>
		</div>
	)
}
