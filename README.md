![GIF-CONAN](https://images6.fanpop.com/image/photos/39900000/conan-detective-conan-39997430-500-283.gif)  <br>

# API CONAN DETECTIVE

> take info from api   <br>


## Get All Characters

```GET: https://api-conan.cyclic.app/api```

| Key     | Type                       |
| ------- | -------------------------- |
| count   | Number                     |
| name    | String                     |
| picture | String                     |
| role    | String                     |
| link    | String (get one character) |

## Get One Character

```GET: https://api-conan.cyclic.app /api/character/{name}```<br>

> ex: https://api-conan.cyclic.app /api/character/Shinichi_Kudo

| Key           | Type                 |
| ------------- | -------------------- |
| english name  | String               |
| age           | String               |
| japanese name | String               |
| gender        | String               |
| height        | String               |
| weight        | String               |
| date of birth | String               |
| relatives     | String               |
| occupation    | String               |
| status        | String               |
| aliases       | String               |
| image         | String               |

