## Zazmic

This project has one service:

- **REST API**
  - Developed using the express framework.
  - Contains four endpoint that a user can see the healthcheck, create a new session, create a new client or coach, and see the coach's hours.

## Stack

- Node v18
- Docker
- Docker-Compose

## Running Project

- Install repositories' dependencies and build the distributions. Run each of the following commands from the backend root:

  1.  ```sh
      npm i

      ```

2. Change the env variables in docker-compose.yml if you want

3. From the root of the project, run the following command: `docker-compose up -d` and it is going to create two containers (server-api and postgres database)

4. The server-api is going to run in 3333 port and the database is going to run in 5433 port

5. You need to run two commands to create database and run migrations

   - `docker exec zazmic-server-1 npx sequelize-cli db:create` to create database
   - `docker exec zazmic-server-1 npx sequelize-cli db:migrate` to run the migrations

6. Now you can see in `http://localhost:3333/api-docs` all the endpoints in a swagger and you can use it if you want to test or if you prefer insomnia you can use as well

## Notes

    I wanted to take a moment to express my sincere gratitude for the opportunity to complete the code test as part of the application process. It was a valuable experience, and I truly appreciate the chance to showcase my skills and expertise.
    I found the test to be engaging and well-constructed, providing an excellent opportunity to demonstrate my problem-solving abilities and technical proficiency. Moreover, it allowed me to gain insights into the type of work and challenges I may encounter within your organization.
    I want to thank you and your team for considering my application and for providing me with this opportunity to demonstrate my capabilities. Regardless of the outcome, I am grateful for the chance to participate in the process and to learn more about your company and its objectives.
    Please do not hesitate to reach out if you require any further information or clarification regarding the test or my application. I am eager to discuss any feedback or next steps and am available at your convenience.
    Once again, thank you for this opportunity, and I look forward to the possibility of contributing to your team in the future.
