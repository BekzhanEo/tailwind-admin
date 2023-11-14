import type { Option } from "components/atoms/Dropdown/types";

export interface ILoadOption {
	options: Option[]
	hasMore: boolean
	additional: { page: number } | undefined
}
