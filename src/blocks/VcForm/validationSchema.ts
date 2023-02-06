import { object, string } from 'yup'

export const validationSchema = object().shape({
  category: string().required(),
  industriesOfInterest: string().required(),
  investmentRange: string().required(),
  companyName: string().required(),
  website: string().required(),
  link: string().required(),
  fullName: string().required(),
  socialLink: string().required(),
})
