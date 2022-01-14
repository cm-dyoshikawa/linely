import { Container } from 'inversify'
import { buildShowChannelByAccessTokenComponentHandler } from '../component/channel/adapter/handler/show-channel-by-access-token-component-handler'
import { buildShowChannelBySecretComponentHandler } from '../component/channel/adapter/handler/show-channel-by-secret-component-handler'
import { ChannelLowRepository } from '../component/channel/adapter/repository/channel-repository'
import { buildShowChannelByAccessTokenUseCase } from '../component/channel/use-case/show-channel-by-access-token-use-case'
import { buildSendPushMessageFastifyHandler } from '../component/message/adapter/handler/send-push-message-fastify-handler'
import { buildSendReplyMessageFastifyHandler } from '../component/message/adapter/handler/send-reply-message-fastify-handler'
import { ChannelComponentRepository as MessageComponentChannelComponentRepository } from '../component/message/adapter/repository/channel-repository'
import { UserComponentRepository as MessageComponentUserComponentRepository } from '../component/message/adapter/repository/user-repository'
import { buildSendPushMessageUseCase } from '../component/message/use-case/send-push-message-use-case'
import { buildSendReplyMessageUseCase } from '../component/message/use-case/send-reply-message-use-case'
import { buildDebugPingFastifyHandler } from '../component/user/adapter/handler/debug-ping-fastify-handler'
import { buildDebugRegisterUserFastifyHandler } from '../component/user/adapter/handler/debug-register-user-fastify-handler'
import { buildFriendshipStatusFastifyHandler } from '../component/user/adapter/handler/get-friendship-status-fastify-handler'
import { buildGetUserProfileFastifyHandler } from '../component/user/adapter/handler/get-user-profile-fastify-handler'
import { buildShowUserComponentHandler } from '../component/user/adapter/handler/show-user-component-handler'
import { buildVerifyAccessTokenFastifyHandler } from '../component/user/adapter/handler/verify-access-token-fastify-handler'
import { buildVerifyIdTokenFastifyHandler } from '../component/user/adapter/handler/verify-id-token-fastify-handler'
import { UserLowRepository } from '../component/user/adapter/repository/user-repository'
import { buildRegisterUserUseCase } from '../component/user/use-case/register-user-use-case'
import { buildShowUserUseCase } from '../component/user/use-case/show-user-use-case'
import { DI_TYPE } from './type'

export const bootstrap = (): Container => {
  const container = new Container()

  /**
   * Channel Component
   */
  container
    .bind(DI_TYPE.CHANNEL_COMPONENT_CHANNEL_REPOSITORY)
    .toDynamicValue(() => new ChannelLowRepository())
  container
    .bind(DI_TYPE.SHOW_CHANNEL_BY_ACCESS_TOKEN_USE_CASE)
    .toDynamicValue(({ container: c }) =>
      buildShowChannelByAccessTokenUseCase({
        channelRepository: c.get(DI_TYPE.CHANNEL_COMPONENT_CHANNEL_REPOSITORY),
      })
    )
  container
    .bind(DI_TYPE.SHOW_CHANNEL_BY_SECRET_USE_CASE)
    .toDynamicValue(({ container: c }) =>
      buildShowChannelByAccessTokenUseCase({
        channelRepository: c.get(DI_TYPE.CHANNEL_COMPONENT_CHANNEL_REPOSITORY),
      })
    )
  container
    .bind(DI_TYPE.SHOW_CHANNEL_BY_ACCESS_TOKEN_COMPONENT_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildShowChannelByAccessTokenComponentHandler({
        showChannelByAccessTokenUseCase: c.get(
          DI_TYPE.SHOW_CHANNEL_BY_ACCESS_TOKEN_USE_CASE
        ),
      })
    )
  container
    .bind(DI_TYPE.SHOW_CHANNEL_BY_SECRET_COMPONENT_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildShowChannelBySecretComponentHandler({
        showChannelBySecretUseCase: c.get(
          DI_TYPE.SHOW_CHANNEL_BY_SECRET_USE_CASE
        ),
      })
    )

  /**
   * User Component
   */
  container
    .bind(DI_TYPE.USER_COMPONENT_USER_REPOSITORY)
    .toDynamicValue(() => new UserLowRepository())

  container
    .bind(DI_TYPE.REGISTER_USER_USE_CASE)
    .toDynamicValue(({ container: c }) =>
      buildRegisterUserUseCase({
        userRepository: c.get(DI_TYPE.USER_COMPONENT_USER_REPOSITORY),
      })
    )
  container
    .bind(DI_TYPE.SHOW_USER_USE_CASE)
    .toDynamicValue(({ container: c }) =>
      buildShowUserUseCase({
        userRepository: c.get(DI_TYPE.USER_COMPONENT_USER_REPOSITORY),
      })
    )

  container
    .bind(DI_TYPE.DEBUG_PING_HANDLER)
    .toDynamicValue(() => buildDebugPingFastifyHandler())
  container
    .bind(DI_TYPE.DEBUG_REGISTER_USER_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildDebugRegisterUserFastifyHandler(
        c.get(DI_TYPE.REGISTER_USER_USE_CASE)
      )
    )

  container
    .bind(DI_TYPE.VERIFY_ACCESS_TOKEN_FASTIFY_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildVerifyAccessTokenFastifyHandler(c.get(DI_TYPE.SHOW_USER_USE_CASE))
    )
  container
    .bind(DI_TYPE.VERIFY_ID_TOKEN_FASTIFY_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildVerifyIdTokenFastifyHandler(c.get(DI_TYPE.SHOW_USER_USE_CASE))
    )
  container
    .bind(DI_TYPE.GET_USER_PROFILE_FASTIFY_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildGetUserProfileFastifyHandler(c.get(DI_TYPE.SHOW_USER_USE_CASE))
    )
  container
    .bind(DI_TYPE.GET_FRIENDSHIP_STATUS_FASTIFY_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildFriendshipStatusFastifyHandler(c.get(DI_TYPE.SHOW_USER_USE_CASE))
    )
  container
    .bind(DI_TYPE.SHOW_USER_COMPONENT_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildShowUserComponentHandler(c.get(DI_TYPE.SHOW_USER_USE_CASE))
    )

  /**
   * Message Component
   */
  container.bind(DI_TYPE.MESSAGE_COMPONENT_USER_REPOSITORY).toDynamicValue(
    ({ container: c }) =>
      new MessageComponentUserComponentRepository({
        showUserComponentHandler: c.get(DI_TYPE.SHOW_USER_COMPONENT_HANDLER),
      })
  )
  container.bind(DI_TYPE.MESSAGE_COMPONENT_CHANNEL_REPOSITORY).toDynamicValue(
    ({ container: c }) =>
      new MessageComponentChannelComponentRepository({
        showChannelByAccessTokenComponentHandler: c.get(
          DI_TYPE.SHOW_CHANNEL_BY_ACCESS_TOKEN_COMPONENT_HANDLER
        ),
        showChannelBySecretComponentHandler: c.get(
          DI_TYPE.SHOW_CHANNEL_BY_SECRET_COMPONENT_HANDLER
        ),
      })
  )
  container
    .bind(DI_TYPE.SEND_REPLY_MESSAGE_USE_CASE)
    .toDynamicValue(({ container: c }) =>
      buildSendReplyMessageUseCase({
        userRepository: c.get(DI_TYPE.MESSAGE_COMPONENT_USER_REPOSITORY),
      })
    )
  container
    .bind(DI_TYPE.SEND_PUSH_MESSAGE_USE_CASE)
    .toDynamicValue(({ container: c }) =>
      buildSendPushMessageUseCase({
        userRepository: c.get(DI_TYPE.MESSAGE_COMPONENT_USER_REPOSITORY),
        channelRepository: c.get(DI_TYPE.MESSAGE_COMPONENT_CHANNEL_REPOSITORY),
      })
    )
  container
    .bind(DI_TYPE.SEND_REPLY_MESSAGE_FASTIFY_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildSendReplyMessageFastifyHandler({
        sendReplyMessageUseCase: c.get(DI_TYPE.SEND_REPLY_MESSAGE_USE_CASE),
      })
    )
  container
    .bind(DI_TYPE.SEND_PUSH_MESSAGE_FASTIFY_HANDLER)
    .toDynamicValue(({ container: c }) =>
      buildSendPushMessageFastifyHandler({
        sendPushMessageUseCase: c.get(DI_TYPE.SEND_PUSH_MESSAGE_USE_CASE),
      })
    )

  return container
}
