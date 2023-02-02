export type Price =
  | {
      usd: number
      ton: number
    }
  | 'free'

type Roles = {
  role: string
  price: Price
}

export const rolesData: Roles[] = [
  {
    role: 'Guest',
    price: {
      usd: 100,
      ton: 40,
    },
  },
  {
    role: 'Startup',
    price: 'free',
  },
  {
    role: 'Company',
    price: {
      usd: 300,
      ton: 100,
    },
  },
  {
    role: 'Private fund',
    price: 'free',
  },
  {
    role: 'Private investor',
    price: 'free',
  },
]
