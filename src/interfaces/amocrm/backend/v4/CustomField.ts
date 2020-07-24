import { AmoCustomFieldType, AmoCustomFieldCode, AmoEntities } from './utils'

export type AmoCustomField = {
  id: number
  name: string
  type: AmoCustomFieldType
  account_id: number
  code: AmoCustomFieldCode | null
  sort: number
  is_api_only: boolean
  enums: null | { id: number; value: string; sort: number }[]
  group_id: null | string
  required_statuses: { pipeline_id: number; status_id: number }[]
  entity_type: AmoEntities
  remind: null | 'day' | 'week' | 'month'
  _links: {
    self: {
      href: string
    }
  }
}
