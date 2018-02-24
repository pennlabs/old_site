# Penn Labs Website 

## Dependencies
- express
- handlebars (`express-handlebars`)
- dotenv
- body-parser

## Usage
0. Create a file named `.env` containing `PORT` and `DB_URI`. 
1. `yarn` (install dependencies).
2. `yarn begin` (if you have nodemon installed) or `yarn start` if you don't have `nodemon` installed.

## About
1. Routes are defined in `index.js` to map URLs to handlebar templates.
2. Static `.html` files are located in `/views/static`.
3. Static images in `views/img` are loaded in `index.js`  
4. Paths within `href` tags are routes instead of files (i.e. `/team` instead of `/team.html`).
5. The default template (including `head`, `footer`, and `nav` tags) is `/views/layouts/main.handlebars`.
6. Subsequent templates are defined accordingly in `/views` and are routed in `index.js`.