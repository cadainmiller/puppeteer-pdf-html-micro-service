# PDF Service

This project converts HTML to PDF files using Puppeteer and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/cadainmiller/pdf-service-js.git
    ```
2. Navigate to the project directory:
    ```sh
    cd pdf-service-js
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API

### POST /

Converts HTML to PDF.

- **URL:** `/`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
      "html": "<html>Your HTML content here</html>"
    }
    ```
- **Response:**
    - **Content-Type:** `application/pdf`
    - **Body:** PDF file

### GET /

Checks if the server is alive.

- **URL:** `/`
- **Method:** `GET`
- **Response:**
    - **Status Code:** `200`
    - **Body:** `Server Alive`

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
