export type Op = Record<string, string>

export type Option = Partial<Op> & {
  label: string
  value: string
}