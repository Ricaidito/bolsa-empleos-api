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

`GET apiUrl/jobs`

**- Get a job by it's id**

`GET apiUrl/jobs/{id}`

**- Add a job**

`POST apiUrl/jobs (only jpg or jpeg)`

**- Modify a job**

`PUT apiUrl/jobs/{id}`

**- Update the logo of a job**

`PUT apiUrl/jobs/logo/{id} (only jpg or jpeg)`

**- Delete a job**

`DELETE apiUrl/jobs/{id}`

**- Wipe all jobs**

`DELETE apiUrl/jobs/wipe/jobs`
