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
  | 'partner'

export type Roles = {
  role: Role
  price: Price
}
