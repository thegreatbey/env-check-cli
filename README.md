\# env-check-cli



A simple, lightweight CLI tool to check if required environment variables are set.  

Ideal for Node.js applications and CI/CD pipelines.



---



\## ✨ Features

\- Validate one or more environment variables.

\- Supports loading variables from a file (`--file`).

\- Exit with non-zero status if any variable is missing (useful for CI).



---



\## 📦 Installation

```bash

npm install -g env-check-cli



---



🚀 Usage

```

env-check-cli VAR1 VAR2 VAR3





or from a file:
env-check-cli --file .env-required



EXAMPLES:

\# Check multiple variables

env-check-cli DB\_HOST DB\_USER DB\_PASS



\# Check using file

env-check-cli --file ./required-env.txt





---


📜 License
MIT License © 2025 cavani21

