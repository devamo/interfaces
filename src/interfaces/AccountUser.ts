import { AccountUserGroupInterface } from './AccountUserGroup'

export interface AccountUserInterface {
  group: AccountUserGroupInterface
  amoId: number
  token: string
  isOwner: boolean
}
