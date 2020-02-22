export enum AccessRulesStrategy {
  REPLACE = 'replace',
  ADD = 'add'
}

export interface AccessRulesItem {
  title: string
  alias: string
}

export interface AccessRules {
  strategy: AccessRulesStrategy
  rules?: AccessRulesItem[]
}
