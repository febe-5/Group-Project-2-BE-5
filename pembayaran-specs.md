# API Specs

## Authentication

All APIs with with role user or admin or both must must use this authentication.

Request :

- Header :
  - Authorization : "your token which is earned after login"

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

## Do some payment

Request :

- Method : `POST`
- Endpoint : `api/pembayaran`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
  "id_psikolog": "ObjectId("string")",
  "jadwal": "string",
  "id_metode": "ObjectId("string")"
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

## Get Data Pembayaran By Id

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

## Update Data Pembayaran By Id

Request :

- Method : `PUT`
- Endpoint : `api/pembayaran/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
  "id_psikolog": "ObjectId("string")",
  "jadwal": "string",
  "id_metode": "ObjectId("string")"
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

## Delete Data Pembayaran By Id

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

## Post Metode(admin)

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

## Update Metode By Id(admin)

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

## Delete Metode By Id(admin)

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

## Delete All Metode By Id(admin)

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
