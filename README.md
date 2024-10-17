
# Comic Book Management API

This is the back-end for a React-based e-commerce store that allows the management and display of comic books as inventory items. It has been implemented with CRUD (Create, Read, Update, Delete) functionality for the store manager to create and manage comic books for sale.


## Technologies Used

⚫  Node.js

⚫ Express.js

⚫ MongoDB

⚫ Mongoose

⚫ Postman (for testing)
## Setup and Installation

 ⚫ Install dependencies:

```bash
  npm install
  npm install mongodb mongoose cors helmet --save-dev mongodb-memory-server
```


## Dependencies

⚫ Ensure the following dependencies are included in your package.json:

```bash
"dependencies": {

  "express": "^<version>",

  "mongodb": "^<version>",

  "mongoose": "^<version>",

  "dotenv": "^<version>",

  "cors": "^<version>",

  `"helmet": "^<version>",

},

"devDependencies": {

  "jest": "^<version>",

  "mongodb-memory-server": "^<version>",

  "supertest": "^<version>"
  
}

```
Replace `<version>` with the specific version numbers or use latest.
## Environment Variables

⚫ Create a .env file in the root directory and add the following variables:

MONGO_URI= ( your own database uri )

PORT=5000

NODE_ENV=development

## Running the Project

1. Start the server:

```bash
  npm start
```

2. The API will be running at: http://localhost:5000/api/comics
## Postman Collection

```bash
{  
  "info": {  
   "_postman_id": "comic-book-management-api",  
   "name": "Comic Book Management API",  
   "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"  
  },  
  "item": [  
   {  
    "name": "Create Comic Book",  
    "request": {  
      "method": "POST",  
      "header": [  
       {  
        "key": "Content-Type",  
        "value": "application/json"  
       }  
      ],  
      "body": {  
       "mode": "raw",  
       "raw": "{\"bookName\":\"The Avengers\",\"authorName\":\"Stan Lee\",\"yearOfPublication\":1963,\"price\":19.99,\"discount\":0.1,\"numberOfPages\":128,\"condition\":\"new\",\"description\":\"The first issue of the iconic Avengers series\"}"  
      },  
      "url": {  
       "raw": "https://example.com/comic-books",  
       "protocol": "https",  
       "host": [  
        "example",  
        "com"  
       ],  
       "path": [  
        "comic-books"  
       ]  
      }  
    }  
   },  
   {  
    "name": "Edit Comic Book",  
    "request": {  
      "method": "PUT",  
      "header": [  
       {  
        "key": "Content-Type",  
        "value": "application/json"  
       }  
      ],  
      "body": {  
       "mode": "raw",  
       "raw": "{\"bookName\":\"The Avengers: Reborn\",\"authorName\":\"Stan Lee\",\"yearOfPublication\":1963,\"price\":24.99,\"discount\":0.2,\"numberOfPages\":128,\"condition\":\"used\",\"description\":\"The first issue of the iconic Avengers series, now with a new cover\"}"  
      },  
      "url": {  
       "raw": "https://example.com/comic-books/1",  
       "protocol": "https",  
       "host": [  
        "example",  
        "com"  
       ],  
       "path": [  
        "comic-books",  
        "1"  
       ]  
      }  
    }  
   },  
   {  
    "name": "Delete Comic Book",  
    "request": {  
      "method": "DELETE",  
      "url": {  
       "raw": "https://example.com/comic-books/1",  
       "protocol": "https",  
       "host": [  
        "example",  
        "com"  
       ],  
       "path": [  
        "comic-books",  
        "1"  
       ]  
      }  
    }  
   },  
   {  
    "name": "Fetch Inventory List",  
    "request": {  
      "method": "GET",  
      "url": {  
       "raw": "https://example.com/comic-books?page=1&limit=10&author=Stan%20Lee&year=1963&price=19.99&condition=new&sort=price",  
       "protocol": "https",  
       "host": [  
        "example",  
        "com"  
       ],  
       "path": [  
        "comic-books"  
       ],  
       "query": [  
        {  
          "key": "page",  
          "value": "1"  
        },  
        {  
          "key": "limit",  
          "value": "10"  
        },  
        {  
          "key": "author",  
          "value": "Stan Lee"  
        },  
        {  
          "key": "year",  
          "value": "1963"  
        },  
        {  
          "key": "price",  
          "value": "19.99"  
        },  
        {  
          "key": "condition",  
          "value": "new"  
        },  
        {  
          "key": "sort",  
          "value": "price"  
        }  
       ]  
      }  
    }  
   },  
   {  
    "name": "Get Comic Book Details",  
    "request": {  
      "method": "GET",  
      "url": {  
       "raw": "https://example.com/comic-books/1",  
       "protocol": "https",  
       "host": [  
        "example",  
        "com"  
       ],  
       "path": [  
        "comic-books",  
        "1"  
       ]  
      }  
    }  
   }  
  ]  
}


```

The https://example.com/comic-books URL is a placeholder or dummy data, indicating that we should replace it with the actual URL of our Comic Book Management API. The example.com domain is a reserved domain name used for illustrative purposes in documentation and testing, and it's not a real domain that can be used for production purposes.
## API Endpoints

#### Create Comic Book

```http
  POST /comic-books
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :------------------------- |
| `bookName` | `string` | **Required**. Name of the comic book |
| `authorName` | `string` | **Required**. Name of the author |
| `yearOfPublication` | `number` | **Required**. Year the comic book was published |
| `price` | `number` | **Required**. Price of the comic book |
| `discount` | `number` | **Optional**. Discount on the comic book |
| `numberOfPages` | `number` | **Required**. Number of pages in the comic book |
| `condition` | `string` | **Required**. Condition of the comic book (new/used) |
| `description` | `string` | **Optional**. Description of the comic book |

#### Edit Comic Book

```http
  PUT /comic-books/${id}
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. ID of the comic book to update |
| `bookName` | `string` | **Required**. Name of the comic book |
| `authorName` | `string` | **Required**. Name of the author |
| `yearOfPublication` | `number` | **Required**. Year the comic book was published |
| `price` | `number` | **Required**. Price of the comic book |
| `discount` | `number` | **Optional**. Discount on the comic book |
| `numberOfPages` | `number` | **Required**. Number of pages in the comic book |
| `condition` | `string` | **Required**. Condition of the comic book (new/used) |
| `description` | `string` | **Optional**. Description of the comic book |

#### Delete Comic Book

```http
  DELETE /comic-books/${id}
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. ID of the comic book to delete |


#### Fetch Inventory List

```http
  GET /comic-books?page=${page}&limit=${limit}&author=${author}&year=${year}&price=${price}&condition=${condition}&sort=${sort}
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :------------------------- |
| `page` | `number` | **Required**. Page number for pagination |
| `limit` | `number` | **Required**. Number of items to return per page |
| `author` | `string` | **Optional**. Filter by author name |
| `year` | `number` | **Optional**. Filter by year of publication |
| `price` | `number` | **Optional**. Filter by price |
| `condition` | `string` | **Optional**. Filter by condition (new/used) |
| `sort` | `string` | **Optional**. Sort the results by specified field |


#### Get Comic Book Details

```http
  GET /comic-books/${id}
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. ID of the comic book to retrieve |





## Query Parameters (for GET /comic-books)

⁍ **page** : (optional) The page number to retrieve (default is 1).

⁍ **limit** : (optional) The number of items per page (default is 10).

⁍ **author** : (optional) Filter by author name.

⁍ **year** : (optional) Filter by year of publication.

⁍ **price** : (optional) Filter by price.

⁍ **condition** : (optional) Filter by condition (e.g., new, used).

⁍ **sort** : (optional) Sort the results (e.g., by price).


## Testing

To run the tests, use the following command:

```bash
npm test
```