import { AmoDevAccountUserGroup } from './AccountUserGroup'

export interface AmoDevAccountUser {
  group: AmoDevAccountUserGroup
  amoId: number
  token: string
  isOwner: boolean
}
