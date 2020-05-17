import { StringBoolean } from '../../../base'

// AMOCRM.constant('managers')
export interface AmoConstantManager {
  id: string | number
  title: string
  option: string
  active: boolean
  login: string
  status: string
  is_admin: StringBoolean
  free_user: StringBoolean
  amojo_id: string
  avatar: string
  group: string
}
