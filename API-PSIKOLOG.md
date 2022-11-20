## Create Psikolog (Admin)

Request :

  - Method : ```POST```
  - Endpoint : ```/psikolog```
  - Header : 

    - Content-Type : application/json
    - Accept : application/json
    - Authorization : token
  
  - Body:
```json
{
    "nama_psikolog" : "string",
    "no_telp" : "string",
    "pengalaman" : "string",
    "jadwal" : "string",
    "harga" : "integer",
    "layanan" : {
        "_id" : "string"
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

  - Method : ```GET```
  - Endpoint : ```/psikolog/{id}```
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
                "psikolog": [
                    "string"
                ]
            }
        ],
        "__v": 0
    }
}
```

## Update Psikolog (Admin)

Request : 

  - Method : ```PUT```
  - Endpoint : ```psikolog/{id}```
  - Header : 

    - Content-Type: application/json
    - Accept: application/json
    - Authorization: token

  - Body:
```json
{
    "nama_psikolog" : "string",
    "no_telp" : "string",
    "pengalaman" : "string",
    "jadwal" : "string",
    "harga" : "integer",
    "layanan" : {
        "_id" : "string"
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
  
  - Method : ```GET```
  - Endpoint : ```/psikolog```
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
                    "psikolog": [
                        "string"
                    ]
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
                    "psikolog": [
                        "string"
                    ]
                }
            ],
            "__v": 0
        }
    ]
}
```

## Delete Get Psikolog (Admin)

Request : 
  
  - Method : ```DELETE```
  - Endpoint : ```/psikolog/{id}```
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
  
  - Method : ```DELETE```
  - Endpoint : ```/psikolog/{id}```
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
