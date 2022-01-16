export const DI_TYPE = {
  // Util
  GENERATE_UUID: 'GENERATE_UUID',

  // Channel Component
  CHANNEL_COMPONENT_CHANNEL_REPOSITORY: 'CHANNEL_COMPONENT_CHANNEL_REPOSITORY',
  SHOW_CHANNEL_BY_ACCESS_TOKEN_USE_CASE:
    'SHOW_CHANNEL_BY_ACCESS_TOKEN_USE_CASE',
  SHOW_CHANNEL_BY_SECRET_USE_CASE: 'SHOW_CHANNEL_BY_SECRET_USE_CASE',
  SHOW_CHANNEL_BY_ACCESS_TOKEN_COMPONENT_HANDLER:
    'SHOW_CHANNEL_BY_ACCESS_TOKEN_COMPONENT_HANDLER',
  SHOW_CHANNEL_BY_SECRET_COMPONENT_HANDLER:
    'SHOW_CHANNEL_BY_SECRET_COMPONENT_HANDLER',

  // User Component
  CLIENT_ENDPOINT: 'CLIENT_ENDPOINT',
  USER_COMPONENT_USER_REPOSITORY: 'USER_COMPONENT_USER_REPOSITORY',
  REGISTER_USER_USE_CASE: 'REGISTER_USER_USER_CASE',
  LOGIN_USE_CASE: 'LOGIN_USE_CASE',
  FIND_USER_USE_CASE: 'FIND_USER_USE_CASE',
  DEBUG_PING_HANDLER: 'DEBUG_PING_HANDLER',
  DEBUG_REGISTER_USER_HANDLER: 'DEBUG_REGISTER_USER_HANDLER',
  VERIFY_ACCESS_TOKEN_FASTIFY_HANDLER: 'VERIFY_ACCESS_TOKEN_FASTIFY_HANDLER',
  VERIFY_ID_TOKEN_FASTIFY_HANDLER: 'VERIFY_ID_TOKEN_FASTIFY_HANDLER',
  GET_USER_PROFILE_FASTIFY_HANDLER: 'GET_USER_PROFILE_FASTIFY_HANDLER',
  GET_FRIENDSHIP_STATUS_FASTIFY_HANDLER:
    'GET_FRIENDSHIP_STATUS_FASTIFY_HANDLER',
  FIND_USER_COMPONENT_HANDLER: 'FIND_USER_COMPONENT_HANDLER',
  AUTHORIZE_FASTIFY_HANDLER: 'AUTHORIZE_FASTIFY_HANDLER',
  LOGIN_FASTIFY_HANDLER: 'LOGIN_FASTIFY_HANDLER',
  TOKEN_FASTIFY_HANDLER: 'TOKEN_FASTIFY_HANDLER',

  // Message Component
  MESSAGE_COMPONENT_USER_REPOSITORY: 'MESSAGE_COMPONENT_USER_REPOSITORY',
  MESSAGE_COMPONENT_CHANNEL_REPOSITORY: 'MESSAGE_COMPONENT_CHANNEL_REPOSITORY',
  SEND_REPLY_MESSAGE_USE_CASE: 'SEND_REPLY_MESSAGE_USE_CASE',
  SEND_PUSH_MESSAGE_USE_CASE: 'SEND_PUSH_MESSAGE_USE_CASE',
  SEND_REPLY_MESSAGE_FASTIFY_HANDLER: 'SEND_REPLY_MESSAGE_FASTIFY_HANDLER',
  SEND_PUSH_MESSAGE_FASTIFY_HANDLER: 'SEND_PUSH_MESSAGE_FASTIFY_HANDLER',
} as const
