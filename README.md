# TurnerTownsendChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Thought Process
- The environments folder contains the API endpoint for this project, this way it is just easier to swap out. 

- When it comes to the routing side of the project I have split everything into modules. These
can be considered as `containers` of a piece of frontend logic. All modules and components fall under
the view folder. If a component is a larger piece of logic this will contain a module with its own components folder.
This could be split in different ways (i.e have a modules folder that matches the component structure). However due to the scale
of this project I felt that the approached used would suffice.

- Services has a communication layer. This is just a simple abstraction layer over the Angular HTTP module. This could
be swapped out if you wanted to use something like Axios.

- In terms of overall structure, if a component has logic this will have a matching service layer folder. This is just to
keep a clear  separation of concerns. The components and modules are in charge of rendering the view. The services
are in charge of providing the views with data to use or actions to execute.

- The shared folder is very thin, due to project size. However this would/could be considered the utility section. The pipe
is simply a newed up piece of logic, it is not really relevant to services and can be used in the view as well, so this is why it
can be considered as a shared piece of logic.

- I decided to use bootstrap for styling as well as SCSS (With BEM naming conventions). I have not needed
to add too much styling as Bootstrap provides most of it out of the box. As I wanted an easy way to access flexbox and
grid like features.

- From a testing perspective under services you will notice `_sut` this is just a naming convention I have adopted from out team
that stands for `system under test` and the preceding `_` is just to provide a level of visibility. Just like with all private methods 
in the classes. The `_` is not needed however from a style point of view creates a clear separation for the user consuming and using the API.
