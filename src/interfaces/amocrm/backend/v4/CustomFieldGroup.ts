import { AmoEntities } from './utils'

export type AmoCustomFieldGroup = {
  id: string | number
  name: string
  is_predefined: boolean
  entity_type: AmoEntities
  sort: number
  _links: {
    self: {
      href: string
    }
  }
}
