import { object, string, number } from 'yup'

export const validationSchema = object().shape({
  startupName: string().required(),
  description: string().required(),
  preAcceleration: string().required(),
  teamMembersCount: number().required().positive(),
})
