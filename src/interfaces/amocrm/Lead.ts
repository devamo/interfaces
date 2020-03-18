import { AmoCustomFieldValue } from './CustomField'
import { AmoTag } from './Tag'

export interface AmoLead {
  id: number
  name: string
  responsible_user_id: number
  created_by: number
  created_at: number
  updated_at: number
  account_id: number
  pipeline_id: number
  status_id: number
  updated_by: number
  is_deleted: number
  main_contact: {
    id?: number
  }
  group_id: number
  company: {
    id?: number
  }
  closed_at: number
  closest_task_at: number
  tags: AmoTag[] | any
  custom_fields: AmoCustomFieldValue[]
  sale: number
  loss_reason_id: number
  contacts: {
    id?: number[]
  }
  pipeline: {
    id?: number
  }
}
