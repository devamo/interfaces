export interface AmoCustomFieldGroup {
  id: string | number
  name: string
  is_predefined: boolean
  entity_type: 'leads' | 'contacts' | 'companies' | 'customers' | 'segments' | 'catalogs'
  sort: number
  _links: {
    self: {
      href: string
    }
  }
}
