export type ActiveFormField =
  | 'category'
  | 'industriesOfInterest'
  | 'investmentRange'
  | 'companyName'
  | 'website'
  | 'link'
  | 'fullName'
  | 'socialLink'

export type FormValues = {
  category: string[]
  industriesOfInterest: string[]
  investmentRange: string[]
  companyName: string
  website: string
  link: string
  fullName: string
  socialLink: string
}
