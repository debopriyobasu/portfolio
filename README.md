# Debopriyo's Portfolio

## Setup Instructions (Docker)

This project can be easily set up and run locally using Docker. Follow these steps to get started:

**Prerequisites:**

- **Docker:** Ensure you have Docker Desktop installed and running on your machine. You can download it from [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/).
- **Docker Compose:** Docker Compose is usually bundled with Docker Desktop. Verify it's installed by running `docker compose version` in your terminal. If not, follow the instructions on the docker website to install it.

**Steps:**

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/debopriyobasu/portfolio.git
    cd portfolio
    ```

2.  **Build and Run the Docker Container:**
    Navigate to the project's root directory (where the `docker-compose.yml` file is located) in your terminal and run the following command:

    ```bash
    docker compose up -d --build
    ```

    - `docker compose up`: This command starts the services defined in your `docker-compose.yml` file.
    - `-d`: This flag runs the containers in detached mode (in the background).
    - `--build`: This flag ensures that the Docker image is built (or rebuilt if changes have been made) before starting the container.

3.  **Access the Application:**
    Once the containers are up and running, you should be able to access the portfolio in your web browser at:

    ```
    http://localhost:4173
    ```

4.  **Stopping the application**
    To stop the application, run the following command in the project's root directory:
    ```bash
    docker compose down
    ```
    This will stop and remove the containers created by `docker compose up`.

**Troubleshooting:**

- **Port Conflicts:** If you encounter an error related to port conflicts, it means another application is already using the port specified in your `docker-compose.yml` file. You can either:
  - Stop the other application.
  - Change the port mapping in your `docker-compose.yml` file.
- **Image Build Errors:** If you encounter errors during the image build process, carefully review the error messages. They usually indicate issues with your `Dockerfile` or the dependencies required by your application.
- **Docker not running:** If you get an error that docker is not running, make sure that docker desktop is running in your machine.

**Next Steps:**

- If you want to make changes to the code, you can edit the files in your local machine. The changes will be reflected in the running container.
- If you want to rebuild the image after making changes, run `docker compose up -d --build` again.

**Note:**

- Make sure that you have a `docker-compose.yml` and a `Dockerfile` in the root directory of the project.
- This guide assumes that the project is set up to run using docker. If not, you will need to create a `Dockerfile` and a `docker-compose.yml` file.
- This guide assumes that the application is a web application. If it is not, you will need to adjust the instructions accordingly.
