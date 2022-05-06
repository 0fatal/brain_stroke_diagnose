import type { Moment } from 'moment'

export interface ObjInfo {
  name: string
  hospital: string
  idCard: string
  address: {
    p: string
    c: string
    a: string
  }
  date: Moment
  sex: string
  age: number
  phone: string
}
