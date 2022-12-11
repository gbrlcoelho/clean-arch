/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'
import { Authentication, AuthenticationParams } from '@/domain/usecases'

export class RemotheAuthentication implements Authentication {
  constructor (private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })
    const body = (): AccountModel => {
      if (httpResponse.body) return httpResponse.body
      return {} as AccountModel
    }
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return body()
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
