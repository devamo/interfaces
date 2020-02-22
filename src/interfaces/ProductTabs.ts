import { WidgetInterface } from './Widget'

export enum ProductTabsStrategy {
  REPLACE = 'replace',
  ADD = 'add'
}

export interface ProductTabsItem {
  title: string
  alias: string
  active: (widget: WidgetInterface) => boolean
  callback: (tab: ProductTabsItem, widget: WidgetInterface) => void
}

export interface ProductTabs {
  strategy: ProductTabsStrategy
  tabs?: ProductTabsItem[]
}
