import { AmoUser } from './User'
import { AmoCustomField } from './CustomField'
import { AmoPipeline } from './Pipeline'
import { AmoGroup } from './Group'

export interface AmoAccountDatePattern {
  date: string
  time: string
  date_time: string
  time_full: string
}

export interface AmoAccount {
  id: number
  name: string
  subdomain: string
  currency: string
  timezone: string
  timezone_offset: string
  language: string
  date_pattern: AmoAccountDatePattern
  current_user: number
  _embedded?: {
    users?: {
      [id: string]: AmoUser
    }
    custom_fields?: {
      contacts?: {
        [id: string]: AmoCustomField
      }
      companies?: {
        [id: string]: AmoCustomField
      }
      leads?: {
        [id: string]: AmoCustomField
      }
    }
    pipelines?: {
      [id: string]: AmoPipeline
    }
    groups?: {
      [id: string]: AmoGroup
    }
  }
}
