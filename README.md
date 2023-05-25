**Under Development*

<hr>

# Deno Server with TypeScript and React

>### This repository contains a Deno server implementation with a TypeScript backend and a React frontend.

<br/>

## Prerequisites

Before getting started, make sure you have the following installed:

- [Deno](https://deno.land/)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

<br/>
<br/>

## Getting Started
<br/>

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/deno-server.git
    ```
<br/>

2. Install the dependencies for the backend:

    ```bash
    cd server

    deno cache --unstable deps.ts
    ```

<br/>

3. Install dependencies for the client:

    ```bash
    cd ui

    npm install
    ```

<br/>


4. Build the client:

    ```bash
    npm run build

    ```

<br/>

5. Start the server:

    ```bash
   deno run --allow-net --allow-read server.ts
    ```
<br/>

6. Open the client in your browser:

    ```bash
    http://localhost:8000
    ```

<br/>

## Project Structure
- server.ts: Entry point for the Deno server.
- deps.ts: File for managing server-side        dependencies.
- client: Directory containing the React client code.
- src: Source code for the React components.
- public: Static assets (e.g., HTML, CSS, images).
- build: Production build of the React app.

<br/>

## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request.


<br/>

## License
This project is licensed under the [**MIT** License.](https://chat.openai.com/LICENSE)


<br/>

## Acknowledgments
- [Deno](https://deno.land/)

- [React](https://reactjs.org/)

- [TypeScript](https://www.typescriptlang.org/)

<br/><br/><br/>

