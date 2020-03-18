export interface AmoCustomField {
  id: number
  name: string
  field_type: number
  sort: number
  code: string
  is_multiple: boolean
  is_system: boolean
  is_editable: boolean
  is_required: boolean
  is_deletable: boolean
  is_visible: boolean
  params?: any
  enums?: {
    [id: string]: any
  }
}

export interface AmoCustomFieldValueItem {
  value: any
  enum?: any
}

export interface AmoCustomFieldValue {
  id: number
  name: string
  is_system: boolean
  values: AmoCustomFieldValueItem[]
}
