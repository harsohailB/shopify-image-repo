<p align="center">
      <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" alt="Logo" width="25%" height="auto">
      <img src="https://miro.medium.com/max/800/1*mUISLg4ghf6QYT_f1-cnlg.png" alt="Logo" width="40%" height="auto">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png" alt="Logo" width="35%" height="auto">

  <h2 align="center">Shopify Image Repository</h2>

  <p align="center">
    Starter Project for CTC YYC Winter 2022 Projects Recruitment
  </p>
</p>

## API Routes

### Users

<details>
<summary>GET /users/auth</summary>

Authenticates the existing auth token on client side

**Query Parameters:**

`username`: string

`auth_token`: string

**Response:**

Ok - 200 or Unauthorized - 409

</details>

<details>
<summary>GET /users (login)</summary>

For user login and providing user with up to date auth token

**Query Parameters:**

`username`: string

`password`: string

**Response:**

```json
{
  "id": 21,
  "username": "test",
  "email": "test@gmail.com",
  "auth_token": "6492446b-65ef-4c7d-a9a3-f819dfbd6f8d",
  "token_expiry": "2022-02-20T01:51:27.894Z"
}
```

</details>

<details>
<summary>POST /users</summary>

Creates a new user

**Body:**

```json
{
  "username": "test",
  "password": "test",
  "email": "test@gmail.com"
}
```

**Response:**

```json
{
  "id": 25,
  "username": "test6",
  "email": "test@gmail.com",
  "auth_token": "1c47305d-daae-4c35-a723-a403f91a7d12",
  "token_expiry": "2022-02-20T20:35:02.082Z"
}
```

</details>

### Images

<details>
<summary>GET /images</summary>

Queries all public images

**Response:**

```json
[
  {
    "id": 6,
    "name": "Practical Steel Car",
    "description": "Mollitia dignissimos assumenda porro et aliquid nisi enim est voluptatem.",
    "image_url": "https://loremflickr.com/300/300",
    "public": true,
    "user": {
      "username": "mandi",
      "email": "demetrius@rau-brown.biz"
    }
  },
  {
    "id": 7,
    "name": "Mediocre Iron Car",
    "description": "Mollitia minus non ipsam debitis fugit eius delectus vel sapiente.",
    "image_url": "https://loremflickr.com/300/300",
    "public": true,
    "user": {
      "username": "kenneth",
      "email": "clark_lebsack@weissnat.com"
    }
  }
]
```

</details>

<details>
<summary>GET /images/:user_id</summary>

Queries images for a certain user's account (private + public)

**Query Parameters:**

`auth_token`: string

**Response:**

```json
[
  {
    "id": 6,
    "name": "BMW M5",
    "description": "0-60 3.9s",
    "image_url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-109-1611684117.jpg?crop=0.708xw:0.798xh;0.0865xw,0.115xh&resize=640:*",
    "public": true,
    "user": {
      "username": "test",
      "email": "test@gmail.com"
    }
  },
  {
    "id": 7,
    "name": "Ducati V4",
    "description": "Hellllla fast",
    "image_url": "https://cdn.visordown.com/field/image/1330x748_V4-MY20_ACC_TO_3-4-ANT-DX_AMB_2.jpg",
    "public": true,
    "user": {
      "username": "test",
      "email": "test@gmail.com"
    }
  }
]
```

</details>

<details>
<summary>POST /images</summary>

Creates a new image

**Query Parameters:**

`auth_token`: string

**Body:**

```json
{
  "user_id": "1",
  "name": "private image",
  "description": "test description",
  "image_url": "test",
  "public": "false"
}
```

**Response:**

```json
{
  "id": 10,
  "name": "private image",
  "description": "test",
  "image_url": "https://www.image.com",
  "public": false,
  "user": {
    "username": "test",
    "email": "test@gmail.com"
  }
}
```

</details>

<details>
<summary>DELETE /images/:image_id</summary>

Deletes an image

**Query Parameters:**

`auth_token`: string
`user_id`: int

**Response:**

No Content, 204

</details>

## Run in Local Environment

Make sure you have `Ruby on Rails` and `postgresql` installed

1. Install Ruby Gems

```
bundle
```

2. Install Node Packages

```
yarn install
```

3. Set Up Local Database

```
rake db:drop db:create db:migrate db:seed
```

4. Run Application

```
./bin/dev
```
