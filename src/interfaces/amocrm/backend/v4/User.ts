export interface AmoUser {
  id: number
  name: string
  email: string
  lang: string
  rights: {
    leads: {
      view: 'A' | 'D' | 'M' | 'G'
      edit: 'A' | 'D' | 'M' | 'G'
      add: 'A' | 'D' | 'M' | 'G'
      delete: 'A' | 'D' | 'M' | 'G'
      export: 'A' | 'D' | 'M' | 'G'
    }
    contacts: {
      view: 'A' | 'D' | 'M' | 'G'
      edit: 'A' | 'D' | 'M' | 'G'
      add: 'A' | 'D' | 'M' | 'G'
      delete: 'A' | 'D' | 'M' | 'G'
      export: 'A' | 'D' | 'M' | 'G'
    }
    companies: {
      view: 'A' | 'D' | 'M' | 'G'
      edit: 'A' | 'D' | 'M' | 'G'
      add: 'A' | 'D' | 'M' | 'G'
      delete: 'A' | 'D' | 'M' | 'G'
      export: 'A' | 'D' | 'M' | 'G'
    }
    tasks: {
      edit: 'A' | 'D' | 'M' | 'G'
      delete: 'A' | 'D' | 'M' | 'G'
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
