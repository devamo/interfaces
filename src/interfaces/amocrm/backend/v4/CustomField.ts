export interface AmoCustomField {
  id: number
  name: string
  type:
    | 'text'
    | 'numeric'
    | 'checkbox'
    | 'select'
    | 'multiselect'
    | 'date'
    | 'url'
    | 'textarea'
    | 'radiobutton'
    | 'streetaddress'
    | 'smart_address'
    | 'birthday'
    | 'legal_entity'
    | 'date_time'
    | 'price'
    | 'category'
    | 'items'
  account_id: number
  code: string | null
  sort: number
  is_api_only: boolean
  enums: null | { id: number; value: string; sort: number }[]
  group_id: null | string
  required_statuses: { pipeline_id: number; status_id: number }[]
  entity_type: 'leads' | 'contacts' | 'companies' | 'customers' | 'segments' | 'catalogs'
  remind: null | 'day' | 'week' | 'month'
  _links: {
    self: {
      href: string
    }
  }
}
