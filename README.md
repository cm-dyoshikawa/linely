# Linely

Linely is inspired by [LocalStack](https://github.com/localstack/localstack). Goal of this tool is to create a mock service for [LINE](https://line.me/ja/).

## Setup

### Docker

```bash
docker run -d -p 3000:3000 dyoshikawa/linely:latest
curl http://localhost:3000/linely/ping
# => {"ping":"pong"}
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3'
services:
  linely:
    image: dyoshikawa/linely:latest
    ports:
      - 3000:3000
```

```bash
docker compose up -d
curl http://localhost:3000/linely/ping
# => {"ping":"pong"}
```

## Usage

```bash
curl --request POST \
  --url http://localhost:3000/linely/users \
  --header 'content-type: application/json' \
  --data '{"id": "FOO_ID","name": "Foo","picture": "http://example.com/foo.jpg","email": "foo@example.com"}'
# => null

curl -v -X POST 'http://localhost:3000/oauth2/v2.1/verify' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'id_token=FOO_ID' \
  --data-urlencode 'client_id=1234567890'
# => {"iss":"https://example.com","sub":"FOO_ID","aud":"1234567890","exp":1504169092,"iat":1504263657,"nonce":"0987654asdf","amr":["pwd"],"name":"Foo","picture":"http://example.com/foo.jpg","email":"foo@example.com"}
```

## Features

### Login API

- [ ] [Issue access token](https://developers.line.biz/ja/reference/line-login/#issue-access-token)
- [x] [Verify access token](https://developers.line.biz/ja/reference/line-login/#verify-access-token)
- [ ] [Refresh access token](https://developers.line.biz/ja/reference/line-login/#refresh-access-token)
- [ ] [Revoke access token](https://developers.line.biz/ja/reference/line-login/#revoke-access-token)
- [x] [Verify ID token](https://developers.line.biz/ja/reference/line-login/#verify-id-token)
- [x] [Get user profile](https://developers.line.biz/ja/reference/line-login/#get-user-profile)
- [x] [Get friendship status](https://developers.line.biz/ja/reference/line-login/#get-friendship-status)

### Messaging API

- [x] [Send reply message](https://developers.line.biz/ja/reference/messaging-api/#send-reply-message)
- [x] [Send push message](https://developers.line.biz/ja/reference/messaging-api/#send-push-message)
- [ ] [Send multicast message](https://developers.line.biz/ja/reference/messaging-api/#send-multicast-message)
- [ ] [Send narrowcast message](https://developers.line.biz/ja/reference/messaging-api/#send-narrowcast-message)
- [ ] [Get narrowcast progress status](https://developers.line.biz/ja/reference/messaging-api/#get-narrowcast-progress-status)
- [ ] [Send broadcast message](https://developers.line.biz/ja/reference/messaging-api/#send-broadcast-message)
- [ ] [Get content](https://developers.line.biz/ja/reference/messaging-api/#get-content)
- [ ] [Get quota](https://developers.line.biz/ja/reference/messaging-api/#get-quota)
- [ ] [Get consumption](https://developers.line.biz/ja/reference/messaging-api/#get-consumption)
- [ ] [Get number of reply messages](https://developers.line.biz/ja/reference/messaging-api/#get-number-of-reply-messages)
- [ ] [Get number of push messages](https://developers.line.biz/ja/reference/messaging-api/#get-number-of-push-messages)
- [ ] [Get number of multicast messages](https://developers.line.biz/ja/reference/messaging-api/#get-number-of-multicast-messages)
- [ ] [Get number of broadcast messages](https://developers.line.biz/ja/reference/messaging-api/#get-number-of-broadcast-messages)
- [ ] [Retry api request](https://developers.line.biz/ja/reference/messaging-api/#retry-api-request)

### Client SDK

- [x] [Initialize liff app](https://developers.line.biz/ja/reference/liff/#initialize-liff-app)
- [x] [Get os](https://developers.line.biz/ja/reference/liff/#get-os)
- [x] [Get language](https://developers.line.biz/ja/reference/liff/#get-language)
- [x] [Get version](https://developers.line.biz/ja/reference/liff/#get-version)
- [x] [Get line version](https://developers.line.biz/ja/reference/liff/#get-line-version)
- [x] [Is in client](https://developers.line.biz/ja/reference/liff/#is-in-client)
- [x] [Is logged in](https://developers.line.biz/ja/reference/liff/#is-logged-in)
- [x] [Is api available](https://developers.line.biz/ja/reference/liff/#is-api-available)
- [x] [Login](https://developers.line.biz/ja/reference/liff/#login)
- [x] [Logout](https://developers.line.biz/ja/reference/liff/#logout)
- [x] [Get access token](https://developers.line.biz/ja/reference/liff/#get-access-token)
- [x] [Get ID token](https://developers.line.biz/ja/reference/liff/#get-id-token)
- [ ] [Get decoded ID token](https://developers.line.biz/ja/reference/liff/#get-decoded-id-token)
- [ ] [Get context](https://developers.line.biz/ja/reference/liff/#get-context)
- [ ] [Get profile](https://developers.line.biz/ja/reference/liff/#get-profile)
- [ ] [Get friendship](https://developers.line.biz/ja/reference/liff/#get-friendship)
- [ ] [Permission query](https://developers.line.biz/ja/reference/liff/#permission-query)
- [ ] [Permission request all](https://developers.line.biz/ja/reference/liff/#permission-request-all)
- [ ] [Permanent link create url by](https://developers.line.biz/ja/reference/liff/#permanent-link-create-url-by)
- [ ] [Permanent link create url](https://developers.line.biz/ja/reference/liff/#permanent-link-create-url)
- [ ] [Permanent link set extra query param](https://developers.line.biz/ja/reference/liff/#permanent-linke-set-extra-query-param)
- [ ] [Send messages](https://developers.line.biz/ja/reference/liff/#send-messages)
- [ ] [Open window](https://developers.line.biz/ja/reference/liff/#open-window)
- [ ] [Share target picker](https://developers.line.biz/ja/reference/liff/#share-target-picker)
- [ ] [Scan code v2](https://developers.line.biz/ja/reference/liff/#scan-code-v2)
- [ ] [Scan code](https://developers.line.biz/ja/reference/liff/#scan-code)
- [ ] [Close window](https://developers.line.biz/ja/reference/liff/#close-window)
- [ ] [Init plugins](https://developers.line.biz/ja/reference/liff/#init-plugins)
- [ ] [Bluetooth get availability](https://developers.line.biz/ja/reference/liff/#bluetooth-get-availability)
- [ ] [Bluetooth request device](https://developers.line.biz/ja/reference/liff/#bluetooth-request-device)
- [ ] [Bluetooth referring device](https://developers.line.biz/ja/reference/liff/#bluetooth-referring-device)
