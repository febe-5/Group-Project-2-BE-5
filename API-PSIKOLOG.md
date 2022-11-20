## Create Psikolog (Admin)

Request :

  - Method : POST
  - Endpoint : /psikolog
  - Header : 

    - Content-Type : application/json
    - Accept : application/json
    - Authorization : token
  
  - Body:
```
{
    "nama_psikolog" : "string",
    "no_telp" : "string",
    "pengalaman" : "string",
    "jadwal" : "string",
    "harga" : integer,
    "layanan" : {
        "_id" : ObjectId("string")
    }
}
```

Response : 
```
{
    "status": "string",
    "message": "string",
    "data": {
        "nama_psikolog": "string",
        "no_telp": "string",
        "pengalaman": "string",
        "jadwal": "string",
        "harga": integer,
        "layanan": [
            "_id": "string"
        ],
        "_id": "string",
        "__v": 0
    }
}
```
## Get Psikolog (User, Admin)

Request :

  - Method : GET
  - Endpoint : /psikolog/{id}
  - Header : 
    
    - Accept: application/json
    - Authorization: token

Response :
```
{
    "status": "string",
    "message": "string",
    "data": {
        "_id": "string",
        "nama_psikolog": "string",
        "no_telp": "string",
        "pengalaman": "string",
        "jadwal": "string",
        "harga": integer,
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

  - Method : PUT
  - Endpoint : psikolog/{id}
  - Hedaer : 
    - Content-Type: application/json
    - Accept: application/json
    - Authorization: token

  - Body:
```
{
    "nama_psikolog" : "string",
    "no_telp" : "string",
    "pengalaman" : "string",
    "jadwal" : "string",
    "harga" : integer,
    "layanan" : {
        "_id" : ObjectId("string")
    }
}
```

Response: 

```
{
    "status": "string",
    "message": "string",
    "data": {
        "nama_psikolog": "string",
        "no_telp": "string",
        "pengalaman": "string",
        "jadwal": "string",
        "harga": integer,
        "layanan": [
            "_id": "string"
        ],
        "_id": "string",
        "__v": 0
    }
}
```

## List Psikolog (User, Admin)

Request : 
  
  - Method : GET
  - Endpoint : /psikolog
  - Header : 
    - Accept: application/json
    - Authorization: token

Response : 

```
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
            "harga": integer,
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
            "harga": integer,
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