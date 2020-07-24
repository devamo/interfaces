export interface AmoPipeline {
  id: number
  account_id: number
  name: string
  sort: number
  is_main: boolean
  is_unsorted_on: boolean
  is_archive: boolean
  is_predefined: boolean
  entity_type: 'leads' | 'contacts' | 'companies' | 'customers' | 'segments' | 'catalogs'
  _links: {
    self: {
      href: string
    }
  }
  _embedded?: {
    statuses?: {
      id: number
      name: string
      sort: number
      is_editable: boolean
      pipeline_id: number
      color: string
      type: string
      account_id: number
      _links: {
        self: {
          href: string
        }
      }
    }[]
  }
}
