// AMOCRM.constant('user')
export interface AmoConstantUser {
  id: number
  name: string
  login: string
  api_key: string
  personal_mobile: string
  amojo_id: string
  group_mates_ids: number[]
  settings: {
    layout_width: {
      leads: {
        width: number | string
      }
      contacts: {
        width: number | string
      }
      companies: {
        width: number | string
      }
      customers: {
        width: number | string
      }
      unsorted: {
        width: number | string
      }
    }
    feed_filter: {
      leads: {
        linked: number[]
        types: number[]
      }
      contacts: {
        linked: number[]
        types: number[]
      }
    }
    notify_time_before_task: number
    default_task_preset: number | string
  }
}
