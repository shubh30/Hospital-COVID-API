# Hospital-COVID-API

RESTFul API for hospital to maintain all the records for COVID patients. It helps to track data of patients who all comes under status: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"]

## Directory Structure:

1. config: All the configuration files like
   - mongoose.js

2. controller\api\v1: It contains all the controllers for routes 
   - doctors.js
   - patients.js
   - routes.js
   
3. Models: Schemas 
   - doctor.js
   - patient.js
   - report.js
   
4. Routes\api\v1: files for routing the user request to the appropriate controllers
   - doctors.js
   - index.js root file
   - patients.js
   - reports.js
   
5. middleware: It contains middleware for JWT
   - auth.js

## Starting the project:

1. Download as zip or clone and extract it to your system.
2. Open folder.
3. Open terminal and make the project folder as your current directory
4. Run ```mongod``` to start MongoDB
5. Run ```npm start``` to initiate the projects with all dependencies.
6. Use **Postman** to test the API.

## Routes

1. **Register a Doctor**: ```[POST]: /api/v1/doctors/register``` \
   Add in ```req.body```
   ```
   {
    "name": "Doctor's name",
    "email": "Doctor's email",
    "password": password
   }
   ```

2. **Login for Doctor**: ```[POST]: /api/v1/doctors/login``` \
   Add in ```req.body```
   ```
   {
    "email": "Doctor's email",
    "password": password
   }
   ```
   It will return JWT token in response. Add this token in header as ```Autherization: Bearer Token``` to access protected routes.
   
3. **Register a patient**: ```[POST]: /api/v1/patients/register``` \
   Add in ```req.body```
   ```
   {
    "name": "patient's phone",
    "phone": "patient's phone number"
   }
   ```

4. **Create Patient report**: ```[POST]: /api/v1/patients/:id/create_report``` \
   Add patient's id in params.
   Add in ```req.body```
   ```
   {
    "status": "status" 
   }
   ```
  
5. **Fetch All Reports of a Patient**: ```[GET]: /api/v1/patients/:id/all_reports``` 

6. **Fetch All Reports Based on a Status**: ```[GET]: /api/v1/reports/:status```
