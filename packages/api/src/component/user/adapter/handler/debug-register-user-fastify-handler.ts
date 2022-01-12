import { RouteHandlerMethod } from 'fastify'
import { RegisterUserUseCase } from '../../use-case/register-user-use-case'

export const buildDebugRegisterUserFastifyHandler =
  (registerUserUseCase: RegisterUserUseCase): RouteHandlerMethod =>
  async (request, reply) => {
    const body = request.body as {
      id: string
      name: string
      picture: string
      email: string
      channelId: string
    }

    await registerUserUseCase({
      id: body.id,
      name: body.name,
      picture: body.picture,
      email: body.email,
      channelId: body.channelId,
    })

    reply.type('application/json').code(200)
    return null
  }
