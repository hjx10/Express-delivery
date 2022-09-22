import {HTTP_TYPES} from '@rabbit-run/common'

export interface RootState {
}

export interface UserState {
  token?: string | null,
  user?: HTTP_TYPES.UserMessage | null
}

export interface AddressType {
  id: number
  address: string
  house_number: string
  contact: string
  phone: string
}

export interface AddressState {
  delivery?: AddressType | null
  shipping?: AddressType | null
  position?: string | null
}

export interface OrderState {
  insurance: number
  remark: string
  codeChecked: boolean
  tip: number
}

export interface CouponState {
  current?: HTTP_TYPES.CouponMessage | null
}

export interface AllState extends RootState {
  user: UserState
  address: AddressState
  order: OrderState
  coupon: CouponState
}
