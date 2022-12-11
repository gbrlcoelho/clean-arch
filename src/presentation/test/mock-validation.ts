import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage?: string | null

  validate (): string {
    if (this.errorMessage) return this.errorMessage
    return ''
  }
}
