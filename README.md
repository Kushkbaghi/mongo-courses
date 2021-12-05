# MongoDB-MyCV
```

## Om

>Syfte
Din webbtjänst från denna laboration har följande funktioner:

- visa alla kurser i årskursen (GET - http://localhost:3000/courses)
- visa enskild kurs i årskursen med angivet id (verb GET - http://localhost:3000/courses/2)
- radera en enskild kurs från listan med angivet id (verb DELETE - http://localhost:3000/courses/2)

Utöka denna så att du även kan lägga till kurser:

- lägg till kurs (POST - http://localhost:3000/courses)
```
> ### Install:
- nmp i express
- npm i nodemon **run the app** med **npm run dev** kommando
- lägg: "scripts": {
         "dev": "nodemon server.js"
         } i **package.json-fil** för uppladning av sidan
         
- npm i ejs **read HTML**
#### -VIKTIG- 

##### om HTML känner inte **ejs<%%>kod** 
- Av intallera  HTMLhint extension 
- Installera EJS language support
- Lägg till följande kod i setting.jon file:

 > "vsicons.dontShowNewVersionMessage": true,
    "files.associations": {
        "*.ejs": "html"
    },
    "emmet.includeLanguages": {
        "ejs": "html"
    },
    "htmlhint.options": {
        "spec-char-escape": false,
        "doctype-first": false
    }

##### För att kunna använda method= DELELTE
- Installera **npm i method-override** 
- Inkludera **const methodoverride = require('method-override');**
- Använda **app.use(methodOverride('_method'));**
- För HTML Delete knapp använda 
<**form action="/<%= course._id%>?_method=DELETE" method="POST">**
    **<button type="submit" class="btn">RADERA<i class="fas fa-trash"></i><button>**
**</form>**

- Lägg till link till CSS filer **app.use(express.static(path.join(__dirname, 'public')));** HTML link **<link rel="stylesheet" href="/style.css">**
```

#### För publicering 

Skapad av Nick Kushkbaghi
