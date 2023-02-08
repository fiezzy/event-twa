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
  | 'VC'
  | 'Investor'
  | 'partner'

export type Roles = {
  role: Role
  price: Price
}
