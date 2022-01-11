# Fleettask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## first step 
Clone the repository from the link by running the given command in the terminal
`git clone https://github.com/yashkumartiwari/fleettask.git`

## second Step 
open the folder in the VS code or any IDE and run the below command to install the node modules and
`npm install`

## third step 
run the app on localhost by the below command
`npm start` or `ng serve`

## fourth step 
open the browser by and hit the beloww url
`http://localhost:4200/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## To get the color details i used the below dataset repository 
`https://github.com/meodai/color-names`

to use this dataset we have some endpoints 
1. To get All colors list the endpoint would be called
   `https://api.color.pizza/v1/`

2. To get a list of searched color name endpoint would be called 
   Note: you have enter minimum 3 character to search 
   `https://api.color.pizza/v1/names/{{query}}`  replace `{{query}}` with color name like if you enter red than url will be 
   `https://api.color.pizza/v1/names/red`


