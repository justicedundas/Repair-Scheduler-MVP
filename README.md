# Reapair MIV

Service Request lifecycle:
1. Init -> client form submission
2. Submission -> dispatcher finalizes, approves
3. Fulfillment -> tech receives appointment, completes services
4. Payment -> client receives price, submits payment
5. Confirmation -> dispatcher confirms payment receipt, approves finalized submission
6. Storage -> component unmounted, stored in database

Service Request Object:
```
_id: ObjectID
serviceType: string,
client: {
  userId: ObjectID || guest,
  method: string,   // PHONE, EMAIL< ETC.
  data: string      // email, phone number, etc.
}

```
### Components:
  * submission form
    * Category: service
    * Media: supporting image
    * Description: additional information


### Pages:
URLS:
* tech.${BASE_URL}      // used for tech API
* admin.${BASE_URL}     // used for admin dashboard
* dispatch.${BASE_URL}  // dispatcher url


Login:
  - User
  - Tech
  - Employee
  - Admin

Public:
  - main: landing, describes services
  - services: service listings, sorted by category

Private:
  - Dispatcher: form handling, received from client

Tech:
  - Incoming service request, received from dispatcher
