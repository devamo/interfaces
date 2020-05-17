import { StringBoolean } from '../../../base'

export interface AmoConstantAccountCF {
  ID: number
  NAME: string
  TYPE_ID: number
  ACCOUNT_ID: number
  DESCRIPTION: string
  CODE: string
  SORT: number
  ENTREE_CATALOG: StringBoolean | number
  PREDEFINED: StringBoolean | number
  MULTIPLE: StringBoolean | number
  DISABLED: StringBoolean | number
  ORIGIN: string
  CATALOG_ID: any
  SETTINGS: {
    is_required: any
    is_deletable: boolean
    is_visible: boolean
    vat_rates: any
    filter_type: any
  }
  deleted_at: any
  ELEMENT_TYPES: {
    [key: number]: number
  }
  ENTREE_DEALS: number
  ENTREE_CONTACTS: number
  ENTREE_COMPANY: number
  ENTREE_CUSTOMERS: number
  ENUMS_NAMES?: {
    [key: string]: {
      [key: string]: string
    }
  }
  ENUMS?: {
    [key: string]: {
      ID: number
      VALUE: any
      SORT: number
    }
  }
}

// AMOCRM.constant('account')
export interface AmoConstantAccount {
  id: number
  name: string
  subdomain: string
  predefined_cf: {
    [alias: string]: AmoConstantAccountCF
  }
  cf: {
    [id: string]: AmoConstantAccountCF
  }
  users: {
    [id: string]: string
  }
  country: string
  currency: string
  paid_from: boolean
  paid_till: boolean
  pay_type: string
  tariffName: string
  timezone: string
  date_pattern: string
  language: string
  date_format: string
  time_format: string
  unsorted_on: StringBoolean
  is_contact_name_display_order_first: boolean
  products: {
    enabled: boolean
    catalog_id: number
  }
  helpbot_enabled: boolean
  amojo_id: string
  amojo_server: string
  amojo_enabled: number
  amojo_rights: {
    can_direct: boolean
    can_group_create: boolean
  }
  talks_auto_close_delay: number
  notifications_enabled: boolean
  version: number
}
