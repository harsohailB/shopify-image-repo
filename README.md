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

<details>
<summary>GET /images</summary>

Queries images based on permissions level

**Query Parameters:**

`public`: boolean

`user_id`: when public is false

</details>

<details>
<summary>POST /images</summary>

Creates a new image

**Body:**

```
{
	"user_id": "1",
	"name": "private image",
	"image_url": "test",
	"public": "false"
}
```

</details>

<details>
<summary>DELETE /images/:id</summary>

Deletes an image

`id`: integer

</details>

<details>
<summary>GET /users (for authentication)</summary>

Authenticates user

**Query Parameters:**

`username`: string

`password`: string

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

</details>
