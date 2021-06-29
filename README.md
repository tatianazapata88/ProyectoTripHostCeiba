# [RETO DIGITAL SCHOOL - CEIBA SOFTWARE - LUZ TATIANA ZAPATA - APLICACION WEB RED DE APOYO INTERNACIONAL - TRIPHOST]




**[RETO DIGITAL SCHOOL - CEIBA SOFTWARE - LUZ TATIANA ZAPATA - APLICACION WEB RED DE APOYO INTERNACIONAL - TRIPHOST]** La aplicacion web TRIPHOST es un desarrollo creado para brindar servicio de busqueda de casas alrededor del mundo al igual que un usuario pueda ofrecer su casa para recibir viajeros. Es una herramienta diseñada con el fin de darle al usuario una experiencia de facil manejo, amigable visualmente que intuitivamente le permita disfrutar de cada servicio. Este proyecto fue construido con un Stack en Frontend con NodeJs  el Framework Angular 11 y  Bootstrap 3, en el backend programado en Java usando JDK 11 y usando Framework SpringBoot. La base de datos  encuentra de manera local, cuyo gestor es mysql.



## Comenzar preparando el Set de instalacion del proyector para Ejecutarlo:

1. Instalar visual Studio Code [Pagina Oficial Visual Studio Code](https://code.visualstudio.com/)
2. Instalar NodeJs from [Pagina Oficial NodeJs](https://nodejs.org/en)
3. Descargar JDK 11 kit de desarrollo de Java [Pagina Oficial Oracle](https://www.oracle.com/co/java/technologies/javase-downloads.html)
4. Instalar MySQL WorkBench [Pagina Oficial MySQL](https://www.mysql.com/products/workbench/)
5. Instalar gestor dependencias maven  [Pagina Oficial Maven](https://maven.apache.org/)
6. Then: ```npm install```
7. And: ```ng serve```
8. Navigate to `http://localhost:4200/`

### Que se envia para la instalacion

Encontraras los siguiente:

archivo README.md
carpeta zip frontend
carpeta zip backend

frontend
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── angular.json
├── e2e
├── karma.conf.js
├── package-lock.json
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── home
│   │   │   ├── home.component.css
│   │   │   ├── home.component.html
│   │   │   ├── home.component.spec.ts
│   │   │   └── home.component.ts
│   │   ├── icons
│   │   │   ├── icons.component.html
│   │   │   └── icons.component.ts
│   │   ├── layouts
│   │   │   └── admin-layout
│   │   │       ├── admin-layout.component.html
│   │   │       ├── admin-layout.component.scss
│   │   │       ├── admin-layout.component.spec.ts
│   │   │       ├── admin-layout.component.ts
│   │   │       ├── admin-layout.module.ts
│   │   │       └── admin-layout.routing.ts
│   │   ├── lbd
│   │   │   ├── lbd-chart
│   │   │   │   ├── lbd-chart.component.html
│   │   │   │   └── lbd-chart.component.ts
│   │   │   └── lbd.module.ts
│   │   ├── maps
│   │   │   ├── maps.component.css
│   │   │   ├── maps.component.html
│   │   │   ├── maps.component.spec.ts
│   │   │   └── maps.component.ts
│   │   ├── shared
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.ts
│   │   │   │   └── footer.module.ts
│   │   │   └── services
│   │   │       ├── auth.service.spec.ts
│   │   │       ├── auth.service.ts
                ├── login.service.ts
│   │   │       └── login.service.spec.ts
│   │   ├── sidebar
│   │   │   ├── sidebar.component.html
│   │   │   ├── sidebar.component.ts
│   │   │   └── sidebar.module.ts
│   │   ├── tables
│   │   │   ├── tables.component.css
│   │   │   ├── tables.component.html
│   │   │   ├── tables.component.spec.ts
│   │   │   └── tables.component.ts
│   │   ├── typography
│   │   │   ├── typography.component.css
│   │   │   ├── typography.component.html
│   │   │   ├── typography.component.spec.ts
│   │   │   └── typography.component.ts
│   │   ├── upgrade
│   │   │   ├── upgrade.component.css
│   │   │   ├── upgrade.component.html
│   │   │   ├── upgrade.component.spec.ts
│   │   │   └── upgrade.component.ts
│   │   └── user
│   │       ├── user.component.css
│   │       ├── user.component.html
│   │       ├── user.component.spec.ts
│   │       └── user.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── sass
│   │       ├── lbd
│   │       └── light-bootstrap-dashboard.scss
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   └── tsconfig.json
├── tslint.json
└── typings.json

backend
├── .mvn
├── .vscode
├── src
│   ├── main
│   │   ├── java/com/ias/backend
│   │   │   | --- domain
│   │   │   |       |── House.java
│   │   │   ├       |── RatingHouse.java
|   |   |   |       |── Reserve.java
│   │   │   |       └── User.java
│   │   │   | --- infraestructure/controllers
│   │   │   |       |── HouseController.java
│   │   │   ├       |── RatingHouseController.java
|   |   |   |       |── ReserveController.java
│   │   │   |       └── UserController.java
│   │   │   | --- repository
│   │   │   |       |── HouseRepository.java
│   │   │   ├       |── RatingHouseRepository.java
|   |   |   |       |── ReserveRepository.java
│   │   │   |       └── UserRepository.java
│   │   │   └── BackendApplication.java
│   │   ├── resources
│   │           ├── static
│   │           │   
│   │           ├── templates 
│   │           └── application.properties
│   │       
│   ├── test
│   │      
├── target
├── HELP.md
├── mvnw.cmd
├── mvnw
├── pomx.xml
├── READ-md

