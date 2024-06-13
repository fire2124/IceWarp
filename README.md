
---

<p align="center">
  <a href="https://www.icewarp.com" rel="noopener">
 <img width=474px height=60px src="https://wwwcdn.icewarp.com/img/homepage/2023/logo-wide.png" alt="React logo"></a>
</p>

<p align="center">This is the IceWarp assignment for Node.JS developer
<a href="https://handbook.infinityworks.com/running-iw/recruitment/elaborations/front-end-user-story-and-elaboration"></a>
</p>

---

## 📝 Table of Contents

- [Assignment Requirements](#assignment_requirements)
- [Getting Started](#getting_started)
  - [Github repo](#github_repo)
  - [Running app](#running_app)
    - [NPM](#npm)
    - [Docker](#docker)
- [Testing](#testing)
    - [Tests coverage](#test_coverage)
- [Swagger](#swagger)
- [Tips](#tips)
---

## 🤔 Assignment Requirements <a name = "assignment_requirements"></a>

1. The endpoint accepts following parameters
   - <span  style="white-space: nowrap" ><h5>key</h5>
     - name of email template (generally there could be many templates, for the
       purpose of this task expect usage of a single one)
       </span >
   - <span  style="white-space: nowrap" ><h5>subject</h5>
     - email subject
       </span >
   - <span  style="white-space: nowrap" ><h5>delayed_send</h5>
     - optional parameter. When missing, email is supposed to be sent
       immediately. When filled, email sending is supposed to be postponed till
       specified time (UTC)
       </span >
   - <span  style="white-space: nowrap" ><h5>body_data</h5>
     - (variables to be used in the template). For the purpose of this task
       consider these variables to be used:
       1. <span  style="white-space: nowrap" ><h5>name</h5>
          - name of the recipient
           </span >
       2. <span  style="white-space: nowrap" ><h5>days</h5>
          - number of days till expiration
           </span >
       3. <span  style="white-space: nowrap" ><h5>link</h5>
          - formatted hyperlink object used in the email body (label and url)
         </span >
   - <span  style="white-space: nowrap" ><h5>email</h5>
      - array of target email addresses
    </span >
   - <span  style="white-space: nowrap" ><h5>bcc</h5>
      - array of hidden copy email addresses
    </span >
  
2. The endpoint logs info about every incoming request to a log file
3. The endpoint fills requested email template with data provided in body_data, subject and
   email addresses
4. The endpoint adds email into a queue for immediate or postponed sending.
   Do not handle the actual email sending in this task; adding a prepared email into a
   queue is sufficient for the purpose of the task.
5. The endpoint responds with a status code (200/202)
   Example of input data:

```json
{
  "key": "task-icewarp",
  "delayed_send": "2024-05-22 15:30:00",
  "email": ["tonda@icewarp.com"],
  "bcc": ["info@icewarp.com"],
  "body_data": {
  "name": "Tonda",
  "days": "7",
  "link": {
    "label": "click here",
    "url": "https://www.icewarp.com"
  }
}
```

---

## 🏁 Getting Started <a name = "getting_started"></a>

#### 👷 Clone github repo <a name = "github_repo"></a>

- `git clone https://github.com/fire2124/IceWarp.git`
- `cd IceWarp`

#### 👷 Running app <a name = "running_app"></a>

To run to app, you have 2 options:

- [Using NPM](#npm)
- [Using Docker](#docker)

---

#### 👷 NPM <a name = "npm"></a>
  1. You need to install dependecies by running 
  `
  npm install
  `

  2. You need to create local .env file, from .env.example file 
  (copy what is inside .env.example to .env)


  3. After installing dependencies you can run  
  `
  npm run dev
  `
    this will run the app.
---

#### 👷 Docker <a name = "docker"></a>
To build your Docker image, navigate to the directory containing your Dockerfile

##### 1. Building the Docker Container <a name = "building_docker"></a>

`docker build -t icewarp:1.0.0 .`

##### 2. Run the Docker Container <a name = "run_docker"></a>

`docker run -p 3000:3000 icewarp:1.0.0`
This will run your Node.js backend application inside a Docker container and you can
access it from your host machine on the link: http://localhost:3000.

##### 3. List of all containers <a name = "list_of_all_docker_images"></a>

`docker ps`

##### 4. Stop container <a name = "stop_container"></a>

`docker stop [container-name-or-id]`

---


## ⛏️ Testing ⛏️ <a name = "testing"></a>

To test this app you can run test by using command: `npm run test`

#### 💯Tests coverage 0️⃣  <a name = "test_coverage"></a>

| File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ----------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files               | 99.01   | 90       | 94.44   | 98.9    |
| src                     | 100     | 50       | 100     | 100     |
| index.ts                | 100     | 50       | 100     | 100     | 13                |
| src/messages            | 100     | 100      | 100     | 100     |
| index.ts                | 100     | 100      | 100     | 100     |
| src/middlewares/logger  | 100     | 100      | 100     | 100     |
| index.ts                | 100     | 100      | 100     | 100     |
| src/routes/email        | 95.83   | 92.3     | 100     | 95.65   |
| index.ts                | 95.83   | 92.3     | 100     | 95.65   | 24                |
| src/utils               | 100     | 100      | 66.66   | 100     |
| index.ts                | 100     | 100      | 66.66   | 100     |
| src/utils/email         | 100     | 100      | 100     | 100     |
| index.ts                | 100     | 100      | 100     | 100     |
| src/utils/emailTemplate | 100     | 100      | 100     | 100     |
| index.ts                | 100     | 100      | 100     | 100     |
| src/utils/logger        | 100     | 100      | 100     | 100     |
| index.ts                | 100     | 100      | 100     | 100     |
| src/utils/queue         | 100     | 100      | 100     | 100     |
| index.ts                | 100     | 100      | 100     | 100     |

---

## 📖 Swagger 📖 <a name = "swagger"></a>

- After starting the app you can see OpenAPi doc on link: http://localhost:3000/api-docs

---

## 🔮 Tips 🤖<a name = "tips"></a>

- If you would like to create normal emails you can use nodemailer: https://nodemailer.com/

---
