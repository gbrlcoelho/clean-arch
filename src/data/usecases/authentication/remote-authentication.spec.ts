
import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemotheAuthentication } from './remote-authentication'

describe('RemotheAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemotheAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
