import { Sources } from './Sources'
import { AccountUserInterface } from './AccountUser'
import { ProductInterface } from './Product'
import { AccountProductInterface } from './AccountProduct'

export interface WidgetInterface {
  uuid: string
  widget: any
  source: Sources
  debug: boolean
  account: Account | null
  accountUser: AccountUserInterface | null
  product: ProductInterface | null
  accountProduct: AccountProductInterface | null

  can: (rule: string, def?: any) => boolean
}
