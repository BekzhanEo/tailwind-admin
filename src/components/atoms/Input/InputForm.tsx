/* eslint-disable react/jsx-handler-names */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-arguments */
import type { ChangeEvent, ReactElement } from 'react'
import type { RegisterOptions } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import Input from './component'
import type { Properties as InputProperties } from './properties'

type Properties = InputProperties & {
	control: any
	rules?: Omit<
		RegisterOptions,
		'disabled' | 'setValueAs' | 'valueAsDate' | 'valueAsNumber'
	>
}

export default function InputForm({
	control,
	rules,
	step,
	type,
	name,
	...rest
}: Properties): ReactElement {
	return (
		<Controller
			name={name as string}
			control={control}
			render={({
				field: { onChange, value, onBlur, ref },
				fieldState: { error }
			}): ReactElement => (
				<Input
					{...rest}
					ref={ref}
					onBlur={onBlur}
					value={value}
					type={type}
					name={name}
					onChange={(event: ChangeEvent<HTMLInputElement>): any => {
						if (type === 'number') {
							onChange(event.target.value ? Number(event.target.value) : '')
						} else {
							onChange(event)
						}
					}}
					required={Boolean(rules?.required)}
					error={error?.message}
					step={step ?? 'any'}
				/>
			)}
			rules={rules}
		/>
	)
}

InputForm.defaultProps = {
	rules: {}
}
