# Angular

## Description

Create a basic app CRUD with Angular

## Table of Contents
 
- [Angular](#angular)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Technology](#technology)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Contact](#contact)

## Getting Started

Follow the instructions below to set up the project on your local machine for development and testing purposes.

### Technology

Angular 16

### Installation

1. Clone the repository:

```
  git clone git remote add origin git@github.com:txm-minh21/Angular-Rails-CRUD-App.git
```

2. Navigate to the project directory:
```
  cd frontend
```
  
3. Build and package each component with Maven:
```
  ng serve
```

## Usage

1. Generate new component
```
  ng generate component [name]
```
Generate file.html, file.css, file.spec.ts, file.ts

2. Generate new service
```
  ng generate service [name]
```

3. Config to call API 

-  create new file proxy.config.json
    ```  
    {
      "/api/*": {
        "target": "http://127.0.0.1:3000/",
        "secure": false,
        "logLevel": "debug"
      }
    }
    ```

- Add file proxy.config.json to angular.json
    ```
    "serve": 
      {
        "options": {
          "browserTarget": "frontend:build",
          "proxyConfig": "src/proxy.config.json"
        },
      },
    ```
- Import HttpClientModule (to call api) and ReactiveFormsModule, FormsModule (to create/adit form) in app.module.ts
  ``` 
    import { HttpClientModule } from '@angular/common/http';
    import { ReactiveFormsModule, FormsModule } from '@angular/forms';

    imports: [
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
    ],
  ```


## Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## Contact

[TxmMinh] - [xuanminh2107@gmail.com]

Project Link: [rails-angular](git@github.com:txm-minh21/Angular-Rails-CRUD-App.git)
 
