export type AmoUserAccessRight = 'A' | 'D' | 'M' | 'G'

export type AmoUser = {
  id: number
  name: string
  email: string
  lang: string
  rights: {
    leads: {
      view: AmoUserAccessRight
      edit: AmoUserAccessRight
      add: AmoUserAccessRight
      delete: AmoUserAccessRight
      export: AmoUserAccessRight
    }
    contacts: {
      view: AmoUserAccessRight
      edit: AmoUserAccessRight
      add: AmoUserAccessRight
      delete: AmoUserAccessRight
      export: AmoUserAccessRight
    }
    companies: {
      view: AmoUserAccessRight
      edit: AmoUserAccessRight
      add: AmoUserAccessRight
      delete: AmoUserAccessRight
      export: AmoUserAccessRight
    }
    tasks: {
      edit: AmoUserAccessRight
      delete: AmoUserAccessRight
    }
    mail_access: boolean
    catalog_access: boolean
    status_rights: any
    is_admin: boolean
    is_free: boolean
    is_active: boolean
    group_id: any
    role_id: any
  }
  _links: {
    self: {
      href: string
    }
  }
}
