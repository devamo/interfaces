import { AmoCustomFieldValue } from './CustomField'
import { AmoTag } from './Tag'

export interface AmoCompany {
  id: number
  name: string
  responsible_user_id: number
  created_by: number
  created_at: number
  updated_at: number
  account_id: number
  updated_by: number
  group_id: number
  closed_at: number
  closest_task_at: number

  contacts: {
    id?: number[]
  }
  leads: {
    id?: number[]
  }
  customers: {
    id?: number[]
  }
  tags: AmoTag[] | any
  custom_fields: AmoCustomFieldValue[]
}
