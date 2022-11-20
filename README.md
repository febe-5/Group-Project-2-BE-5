# Group Project 2 (E-Konsul API)

Repo ini dibuat guna memenuhi tugas group project ke-2 kelompok BE-5.

# API Specs

## Authentication

All APIs with with role user or admin or both must must use this authentication.

Request :

- Header :
  - Authorization : "your token which is earned after login"

## Register

Request :

- Method : `POST`
- Endpoint : `api/register`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body for `user` :

```json
{
	"nama": "string",
	"email": "string",
	"password": "string",
	"umur": "number"
}
```

- Body for `admin` :

```json
{
	"nama": "string",
	"email": "string",
	"password": "string",
	"umur": "number",
	"isAdmin": "boolean"
}
```

Response :

```json
{
	"status": "string",
	"message": "string"
}
```

## Login

Request :

- Method : `POST`
- Endpoint : `api/login`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```json
{
	"email": "string",
	"password": "string"
}
```

Response :

```json
{
	"status": "string",
	"message": "string",
	"accessToken": "string"
}
```

## Show Profile (user, admin)

Request :

- Method : `GET`
- Endpoint : `api/profile`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
	"status": "string",
	"message": "string",
	"data": {
		"nama": "string",
		"email": "string",
		"umur": "number"
	}
}
```

## Update Profile (user, admin)

Request :

- Method : `PUT`
- Endpoint : `api/profile`
- Header :
  - Content-Type : application/json
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
	"nama": "string",
	"email": "string",
	"password": "string",
	"umur": "number"
}
```

Response :

```json
{
	"status": "string",
	"message": "string"
}
```

## Get All User (admin)

Request :

- Method : `GET`
- Endpoint : `api/users`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
"status": "string",
"message": "string",
"data": [
  {
    "nama": "string",
    "email": "string",
    "umur": "number",
    "isAdmin": "boolean"
  },
]
```

## Get User By Id (admin)

Request :

- Method : `GET`
- Endpoint : `api/users/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
"status": "string",
"message": "string",
"data": {
    "nama": "string",
    "email": "string",
    "umur": "number",
    "isAdmin": "boolean"
  }
```

## Update User (admin)

Request :

- Method : `PUT`
- Endpoint : `api/users/:id`
- Header :
  - Content-Type: application/json
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
	"nama": "string",
	"email": "string",
	"password": "string",
	"umur": "number",
	"isAdmin": "boolean"
}
```

Response :

```json
"status": "string",
"message": "string",
"data": {
    "nama": "string",
    "email": "string",
    "umur": "number",
    "isAdmin": "boolean"
  }
```

## Delete User (admin)

Request :

- Method : `DELETE`
- Endpoint : `api/users/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
"status": "string",
"message": "string"
```

## Create Psikolog (Admin)

Request :

- Method : `POST`
- Endpoint : `/psikolog`
- Header :

  - Content-Type : application/json
  - Accept : application/json
  - Authorization : token

- Body:

```json
{
	"nama_psikolog": "string",
	"no_telp": "string",
	"pengalaman": "string",
	"jadwal": "string",
	"harga": "integer",
	"layanan": {
		"_id": "string"
	}
}
```

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": {
        "nama_psikolog": "string",
        "no_telp": "string",
        "pengalaman": "string",
        "jadwal": "string",
        "harga": "integer",
        "layanan": [
            "_id": "string"
        ],
        "_id": "string",
        "__v": 0
    }
}
```

## Get Psikolog

Request :

- Method : `GET`
- Endpoint : `/psikolog/:id`
- Header :
  - Accept: application/json

Response :

```json
{
	"status": "string",
	"message": "string",
	"data": {
		"_id": "string",
		"nama_psikolog": "string",
		"no_telp": "string",
		"pengalaman": "string",
		"jadwal": "string",
		"harga": "integer",
		"layanan": [
			{
				"_id": "string",
				"nama": "string",
				"psikolog": ["string"]
			}
		],
		"__v": 0
	}
}
```

## Update Psikolog (Admin)

Request :

- Method : `PUT`
- Endpoint : `psikolog/:id`
- Header :

  - Content-Type: application/json
  - Accept: application/json
  - Authorization: token

- Body:

```json
{
	"nama_psikolog": "string",
	"no_telp": "string",
	"pengalaman": "string",
	"jadwal": "string",
	"harga": "integer",
	"layanan": {
		"_id": "string"
	}
}
```

Response:

```json
{
    "status": "string",
    "message": "string",
    "data": {
        "nama_psikolog": "string",
        "no_telp": "string",
        "pengalaman": "string",
        "jadwal": "string",
        "harga": "integer",
        "layanan": [
            "_id": "string"
        ],
        "_id": "string",
        "__v": 0
    }
}
```

## List Psikolog

Request :

- Method : `GET`
- Endpoint : `/psikolog`
- Header :

  - Accept: application/json

Response :

```json
{
	"status": "string",
	"message": "string",
	"data": [
		{
			"_id": "string",
			"nama_psikolog": "string",
			"no_telp": "string",
			"pengalaman": "string",
			"jadwal": "string",
			"harga": "integer",
			"layanan": [
				{
					"_id": "string",
					"nama": "string",
					"psikolog": ["string"]
				}
			],
			"__v": 0
		},
		{
			"_id": "string",
			"nama_psikolog": "string",
			"no_telp": "string",
			"pengalaman": "string",
			"jadwal": "string",
			"harga": "integer",
			"layanan": [
				{
					"_id": "string",
					"nama": "string",
					"psikolog": ["string"]
				}
			],
			"__v": 0
		}
	]
}
```

## Delete Get Psikolog (Admin)

Request :

- Method : `DELETE`
- Endpoint : `/psikolog/:id`
- Header :

  - Accept: application/json
  - Authorization: token

Response :

```json
{
	"status": "string",
	"message": "string"
}
```

## Delete All Psikolog (Admin)

Request :

- Method : `DELETE`
- Endpoint : `/psikolog/:id`
- Header :

  - Accept: application/json
  - Authorization: token

Response :

```json
{
	"status": "string",
	"message": "string",
	"data": {
		"acknowledged": "boolean",
		"deletedCount": "integer"
	}
}
```

## Get All Data Pembayaran (admin)

Request :

- Method : `GET`
- Endpoint : `api/pembayaran`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
"status": "string",
"message": "string",
"data": [
  {
    "id_psikolog": {
        "_id": "string",
        "nama_psikolog": "string",
        "no_telp": "string",
        "pengalaman": "string",
        "jadwal": "string",
        "harga": "integer",
        }
    "id_user": {
        "_id": "string",
        "nama": "string",
        "email": "string",
        "password": "string",
        "umur": "integer",
        "isAdmin": "boolean",
    }
    "jadwal": "string",
    "id_metode":  {
        "_id": "string",
        "nama": "string",
      },
  },
]
```

## Delete All Data Pembayaran (admin)

Request :

- Method : `DELETE`
- Endpoint : `api/pembayaran`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
	"status": "success",
	"message": "Delete all data success"
}
```

## Do some payment (user, admin)

Request :

- Method : `POST`
- Endpoint : `api/pembayaran`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
	"id_psikolog": "ObjectId('string')",
	"jadwal": "string",
	"id_metode": "ObjectId('string')"
}
```

Response :

```json
{
	"status": "success",
	"message": "payment success",
	"data": {
		"nama_psikolog": "string",
		"no_telp": "string"
	}
}
```

## Get Data Pembayaran By Id (user, admin)

Request :

- Method : `POST`
- Endpoint : `api/pembayaran/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
	"status": "success",
	"message": "Get data success",
	"data": {
		"_id": "string",
		"id_psikolog": "string",
		"id_user": "string",
		"jadwal": "string",
		"id_metode": "string",
		"__v": 0
	}
}
```

## Update Data Pembayaran By Id (user, admin)

Request :

- Method : `PUT`
- Endpoint : `api/pembayaran/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
	"id_psikolog": "ObjectId('string')",
	"jadwal": "string",
	"id_metode": "ObjectId('string')"
}
```

Response :

```json
{
	"status": "success",
	"message": "Update data success",
	"data": {
		"_id": "string",
		"id_psikolog": "string",
		"id_user": "string",
		"jadwal": "string",
		"id_metode": "string"
	}
}
```

## Delete Data Pembayaran By Id (user, admin)

Request :

- Method : `Delete`
- Endpoint : `api/pembayaran/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
	"status": "success",
	"message": "Delete data success"
}
```

## Get All metode

Request :

- Method : `GET`
- Endpoint : `api/metode`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
	"status": "success",
	"message": "Get data success",
	"data": [
		{
			"_id": "string",
			"nama": "string"
		}
	]
}
```

## Get Metode By Id

Request :

- Method : `GET`
- Endpoint : `api/metode/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

```json
{
	"status": "success",
	"message": "Get data success",
	"data": {
		"_id": "string",
		"nama": "string"
	}
}
```

## Post Metode (admin)

Request :

- Method : `POST`
- Endpoint : `api/metode/`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
	"nama": "string"
}
```

Response :

```json
{
	"status": "success",
	"message": "Post data success",
	"data": {
		"_id": "string",
		"nama": "string"
	}
}
```

## Update Metode By Id (admin)

Request :

- Method : `PUT`
- Endpoint : `api/metode/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
	"nama": "string"
}
```

Response :

```json
{
	"status": "success",
	"message": "Update data success",
	"data": {
		"_id": "string",
		"nama": "string"
	}
}
```

## Delete Metode By Id (admin)

Request :

- Method : `DELETE`
- Endpoint : `api/metode/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
	"status": "success",
	"message": "Delete data success"
}
```

## Delete All Metode (admin)

Request :

- Method : `DELETE`
- Endpoint : `api/metode/`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
	"status": "success",
	"message": "Delete all data success"
}
```
