import { Authentication } from '@/domain/usecases'
import { Validation } from '@/presentation/protocols/validation'

export type LoginProps = {
  validation: Validation
  authentication: Authentication
}
