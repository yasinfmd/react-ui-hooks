# bi-ui-core

-------------------------------

**DEVELOPMENT**

**Clone the app in your computer**


**Build**

``
npm run build | yarn build
``

**Storybook**

``
npm run storybook | yarn storybook
``

**Component Development**

``
npm run dev | yarn dev
``


-----------------------------------

## Install Guide

-------------------------------------------------------

**First**


In your project : \
Add **bi-ui-core** as a dependency,

```
package.json
----------------
{
  ...
  "dependencies": {
    ...
    "bi-ui-core": "file:{PROJECT_PATH}/bi-ui-core",
    /*   OR   */
    "bi-ui-core": "git+",
    ...
  },
 ...
}

```

-------------------------------------------------------

**Second**

In your project run command : ``npm install | yarn install``

-------------------------------------------------------
**Third**

Import **CSS** files

``
import "bi-ui-core/styles.css"
``

OR

Import **SCSS** files

``
import "bi-ui-core/styles.scss"
``

--------------------------------


**Example Usage**

```
import React from "react"
import { Button, Checkbox } from "bi-ui-core"
import "bi-ui-core/styles.css"

const App = () => (
  <div className="container">
    <div className="jumbotron text-center">
      <div>
        UI CORE FRAMEWORK
      </div>
      <div>
        <Button text="selam" />
        <Checkbox label="Checkbox" checked={true} />
      </div>
    </div>
  </div>
)

export default App


```

-----------------------------------

**ENJOY!**
