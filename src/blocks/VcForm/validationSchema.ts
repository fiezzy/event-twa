import { object, string, array } from 'yup'

export const validationSchema = object().shape({
  category: array().of(string().required()).required(),
  industriesOfInterest: array().of(string().required()).required(),
  investmentRange: array().of(string().required()).required(),
  companyName: string().required(),
  website: string().required(),
  link: string().required(),
  fullName: string().required(),
  socialLink: string().required(),
})
