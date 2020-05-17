import { AmoStatus } from './Status'

export interface AmoPipeline {
  id: number
  name: string
  sort: number
  is_main: boolean
  statuses: {
    [id: string]: AmoStatus
  }
}
