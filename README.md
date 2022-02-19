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
<summary>GET /users (login)</summary>

Authenticates a user (user for login to get auth token for subsequent requests)

**Query Parameters:**

`username`: string

`password`: string

**Response:**

```
{
  "id": 21,
  "username": "test",
  "email": "test@gmail.com",
  "auth_token": "71b9057c-3577-496f-812d-eb22804f7e19",
  "token_expiry": "2022-02-20T00:44:36.996Z"
}
```

</details>

<details>
<summary>POST /users</summary>

Creates a new user

**Body:**

```
{
	"username": "test",
	"password": "test",
	"email": "test@gmail.com"
}
```

**Response:**

```
{
  "id": 21,
  "username": "test",
  "email": "test@gmail.com",
  "auth_token": "71b9057c-3577-496f-812d-eb22804f7e19",
  "token_expiry": "2022-02-20T00:44:36.996Z"
}
```

</details>

### Images

<details>
<summary>GET /images</summary>

Queries all public images

**Response:**

```
{
	"data": [
		{
			"id": "5",
			"type": "image",
			"attributes": {
				"name": "Aerodynamic Wooden Shoes",
				"description": "Explicabo odit...",
				"image_url": "https://loremflickr.com/300/300",
				"public": true
			},
			"relationships": {
				"user": {
					"data": {
						"id": "3",
						"type": "user"
					}
				}
			}
		}
	],
	"included": [
		{
			"id": "3",
			"type": "user",
			"attributes": {
				"username": "jerry.dare",
				"email": "zelma_upton@simonis.io",
			}
		}
	]
}
```

</details>

<details>
<summary>POST /images</summary>

Creates a new image

**Query Parameters:**

`auth_token`: string

**Body:**

```
{
	"user_id": "1",
	"name": "private image",
  "description": "test description",
	"image_url": "test",
	"public": "false"
}
```

**Response:**

```
{
	"data": {
		"id": "6",
		"type": "image",
		"attributes": {
			"name": "private image",
			"description": "test",
			"image_url": "test",
			"public": false
		},
		"relationships": {
			"user": {
				"data": {
					"id": "1",
					"type": "user"
				}
			}
		}
	},
	"included": [
		{
			"id": "1",
			"type": "user",
			"attributes": {
				"username": "verdie_veum",
				"email": "blaine@hickle.biz",
				"auth_token": "9561836e-1056-4e51-a030-a65e3b4b6592",
				"token_expiry": "2022-02-20T00:34:38.717Z"
			}
		}
	]
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
