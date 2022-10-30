![GIF-CONAN](https://www.fanpop.com/clubs/detective-conan/images/39997430/title/conan-fanart)  <br>

# API CONAN DETECTIVE

> take info from api   <br>


## Get All Characters

```GET: https://api-conan.herokuapp.com/api```

| Key     | Type                       |
| ------- | -------------------------- |
| count   | Number                     |
| name    | String                     |
| picture | String                     |
| role    | String                     |
| link    | String (get one character) |

## Get One Character

```GET: https://api-conan.herokuapp.com/api/character/{name}```<br>

> ex: https://api-conan.herokuapp.com/api/character/Shinichi_Kudo

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

