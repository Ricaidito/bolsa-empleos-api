# Bolsa de empleos API

## Endpoints:

### Jobs

```js
company: String;
type: String;
logo: Image; // Optional
jobUrl: String; // Optional
position: String;
location: String;
category: String;
contactEmail: String;
```

**- Get all jobs**

`GET http://localhost:3000/jobs`

**- Get a job by it's id**

`GET http://localhost:3000/jobs/{id}`

**- Add a job**

`POST http://localhost:3000/jobs (only jpg or jpeg)`

**- Modify a job**

`PUT http://localhost:3000/jobs/{id}`

**- Update the logo of a job**

`PUT http://localhost:3000/jobs/logo/{id} (only jpg or jpeg)`

**- Delete a job**

`DELETE http://localhost:3000/jobs/{id}`

**- Wipe all jobs**

`DELETE http://localhost:3000/jobs/wipe/jobs`
