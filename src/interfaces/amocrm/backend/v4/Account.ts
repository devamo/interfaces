import { AmoCountriesIds } from './utils'

export type AmoAccount = {
  id: number
  name: string
  subdomain: string
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
  current_user_id: number
  country: AmoCountriesIds
  customers_mode: 'disabled' | 'enabled'
  is_unsorted_on: boolean
  mobile_feature_version: number
  is_loss_reason_enabled: boolean
  is_helpbot_enabled: boolean
  is_technical_account: boolean
  contact_name_display_order: number
  amojo_id?: string
  version?: number
  entity_names?: {
    [entity: string]: {
      [language: string]: {
        singular_form: {
          default: string
          genitive?: string
          dative?: string
          accusative?: string
          instrumental?: string
          prepositional?: string
        }
        plural_form: {
          default: string
          genitive?: string
          dative?: string
          accusative?: string
          instrumental?: string
          prepositional?: string
        }
        gender: string
      }
    }
  }
  _links: {
    self: {
      href: string
    }
  }
  _embedded?: {
    amojo_rights?: {
      can_direct: boolean
      can_create_groups: boolean
    }
    users_groups?: { id: number; name: string }[]
    task_types?: {
      id: number
      name: string
      color: string | null
      icon_id: string | null
      code: string | null
    }[]
    datetime_settings?: {
      date_pattern: string
      short_date_pattern: string
      short_time_pattern: string
      date_format: string
      time_format: string
      timezone: string
      timezone_offset: string
    }
  }
}
