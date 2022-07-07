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

`GET /jobs`

**- Get a job by it's id**

`GET /jobs/{id}`

**- Add a job**

`POST /jobs (only jpg or jpeg)`

**- Modify a job**

`PUT /jobs/{id}`

**- Update the logo of a job**

`PUT /jobs/logo/{id} (only jpg or jpeg)`

**- Delete a job**

`DELETE /jobs/{id}`

**- Wipe all jobs**

`DELETE /jobs/wipe/jobs`
