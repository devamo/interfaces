export enum AmoUserRightsValue {
  ALLOW = 'A',
  DENY = 'D'
}

export interface AmoUserRights {
  mail: AmoUserRightsValue
  incoming_leads: AmoUserRightsValue
  catalogs: AmoUserRightsValue
  lead_add: AmoUserRightsValue
  lead_view: AmoUserRightsValue
  lead_edit: AmoUserRightsValue
  lead_delete: AmoUserRightsValue
  lead_export: AmoUserRightsValue
  contact_add: AmoUserRightsValue
  contact_view: AmoUserRightsValue
  contact_edit: AmoUserRightsValue
  contact_delete: AmoUserRightsValue
  contact_export: AmoUserRightsValue
  company_add: AmoUserRightsValue
  company_view: AmoUserRightsValue
  company_edit: AmoUserRightsValue
  company_delete: AmoUserRightsValue
  company_export: AmoUserRightsValue
  task_edit: AmoUserRightsValue
  task_delete: AmoUserRightsValue
  by_status: any
}

export interface AmoUser {
  id: number
  name: string
  last_name: string
  login: string
  language: string
  group_id: any
  is_active: boolean
  is_free: boolean
  is_admin: boolean
  phone_number: string
  rights: AmoUserRights
}
