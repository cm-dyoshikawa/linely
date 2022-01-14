/* eslint-disable camelcase */

import { RouteHandlerMethod } from 'fastify'
import { ErrorResponseBody } from '../../../../util/handler'
import {
  ShowUserUseCase,
  UserNotFoundError,
} from '../../use-case/show-user-use-case'

/**
 * https://developers.line.biz/ja/reference/line-login/#verify-access-token
 */
interface VerifyAccessTokenRequestQuery {
  access_token: string
}

interface VerifyAccessTokenResponseBody {
  scope: string // 'profile'
  client_id: string // '1440057261'
  expires_in: number // 2591659
}

export const buildVerifyAccessTokenFastifyHandler =
  (showUserUseCase: ShowUserUseCase): RouteHandlerMethod =>
  async (request, reply) => {
    const accessToken = (request.query as VerifyAccessTokenRequestQuery)
      .access_token

    const showUserResult = await showUserUseCase(accessToken)

    if (showUserResult instanceof UserNotFoundError) {
      reply.type('application/json').code(400)
      return {
        error: 'invalid_request',
        error_description: 'access token expired',
      } as ErrorResponseBody
    }

    reply.type('application/json').code(200)
    return {
      scope: 'profile',
      client_id: '1440057261',
      expires_in: 2591659,
    } as VerifyAccessTokenResponseBody
  }