export type Price =
  | {
      usd: number
      ton: number
    }
  | 'free'

export type Role =
  | 'Guest'
  | 'Startup'
  | 'Company'
  | 'Private fund'
  | 'Private investor'

export type Roles = {
  role: Role
  price: Price
}
