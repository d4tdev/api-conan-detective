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
| name          | String               |
| images        | String               |
| japanese name | String               |
| affiliations  | String               |
| occupations   | String               |
| origin        | String               |
| residence     | String               |
| alias         | String               |
| epithet       | String               |
| birth name    | String               |
| status        | String               |
| bounty        | String               |
| devil fruit   | String               |
| gallery       | String (get gallery) |
