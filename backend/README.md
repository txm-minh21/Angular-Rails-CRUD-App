# Ruby on Rails

## Description

Provide api for frontend. Use the following questions as a guide:

## Table of Contents

- [Getting Started](#getting-started)
    - [Technology](#technology)
    - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow the instructions below to set up the project on your local machine for development and testing purposes.

### Technology

Ruby on Rails

### Installation

1. Clone the repository:

```
  git clone git remote add origin git@github.com:txm-minh21/Angular-Rails-CRUD-App.git
```

2. Navigate to the project directory:

``` 
  cd backend 
```

3. Build and run server:

``` 
  rails db:migrate
  rails server
 ```

## Usage

Create api at folder controller/api/v1/article_controller
Use render to response API Json

Config for routes.rb at config

### Note
```
articles: local variables 
-> exists only within this method and cannot be accessed by other parts of the controller or view
-> **Use for API**
@articles: instance variables
-> accessible not only within this method but also in any corresponding view template

```

Config for Cross-Origin Resource Sharing (CORS)

- In Gemfile uncomment
  ```
  gem "rack-cors"
  ```

- In config/initializers/cors.rb uncomment
  ```
  Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "http://localhost:{{frontend-port}}"
  
      resource "*",
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  ```
Use DB in Rubymine

    ```
    Click databases import **Import Data Sources** choose file storage\development.sqlite3
    ```
## Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## Contact

[TxmMinh] - [xuanminh2107@gmail.com]

Project Link: [angular-rails](https://github.com/txm-minh21/Angular-Rails-CRUD-App.git)
 
