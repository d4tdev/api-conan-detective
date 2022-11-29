const cheerio = require('cheerio');
const axios = require('axios');
require('dotenv').config();

const url = process.env.URL;
const characterUrl = process.env.CHARACTER_URL;

class MainController {
   // GET ALL CHARACTERS
   getAllCharacters = async (req, res) => {
      let characters = [];

      try {
         axios(url).then(response => {
            const html = response.data;
            const $ = cheerio.load(html);

            console.log(html)

            $('.chartable').each(function () {
               $(this)
                  .find('tr')
                  .not(':first-child')
                  .each(function () {
                     const name = $(this).find('td:nth-child(2) > a').text();
                     const picture = $(this)
                        .find('td:nth-child(1) > a > img')
                        .attr('src');
                     const role = $(this).find('td:nth-child(4)').text().trim();

                     console.log(name, picture, role);
                     characters.push({
                        name,
                        picture:
                           'https://www.detectiveconanworld.com' + picture,
                        role,
                        link:
                           'https://api-conan.cyclic.app/api/character/' +
                           name.split(' ').join('_'),
                     });
                  });
            });

            let { page, limit, name } = req.query;

            // pagination
            if (page) {
               page = parseInt(page);
               const PAGE_SIZE = 20;
               characters = characters.slice(
                  (page - 1) * PAGE_SIZE,
                  page * PAGE_SIZE
               );
            }

            // search
            if (name) {
               characters = characters.filter(character =>
                  character.name.toLowerCase().includes(name.toLowerCase())
               );
            }

            // limit
            if (limit) {
               limit = parseInt(limit);
               characters = characters.slice(0, limit);
            }

            res.status(200).json({ count: characters.length, characters });
         });
      } catch (e) {
         console.log(e);
         res.status(500).json({ message: e.message });
      }
   };

   // GET ONE CHARACTER
   getOneCharacter = async (req, res) => {
      let titles = [],
         details = [];
      let character = {};
      try {
         axios(characterUrl + req.params.name).then(response => {
            const html = response.data;
            const $ = cheerio.load(html);

            // GET TITLE
            $('.infobox').each(function () {
               const image = $(this)
                  .find('tr:nth-child(2) > td > p > a > img')
                  .attr('src');

               // console.log('https://www.detectiveconanworld.com' + image);

               $(this)
                  .find('tr')
                  .each(function () {
                     const title = $(this).find('th').text().split(':')[0];

                     if (
                        title === '' ||
                        title === 'Appearances' ||
                        title === 'Nicknames' ||
                        title === 'Keyhole number' ||
                        title === 'Drama actor' ||
                        title === 'English voice' ||
                        title === 'First appearance' ||
                        title === 'Cases solved' ||
                        title === 'Japanese voice'
                     )
                        return;

                     let detail = $(this)
                        .find('td')
                        .not('.reference')
                        .prop('innerText')
                        .trim();
                     detail = detail
                        .replace(/\[1]|\[2]|\[3]|\[4]|\[5]|\[6]/g, ' ')
                        .replace(/\s\s+/g, ', ')
                        .replace('Unknown', 'Không có thông tin')
                        .replace('unknown', 'Không có thông tin');
                     details.push(detail);
                     titles.push(title.toLowerCase().replace(/\s/g, '_'));
                  });
               for (let i = 0; i < titles.length; i++) {
                  character[titles[i]] = details[i];
               }
               return res.status(200).json({
                  ...character,
                  image: 'https://www.detectiveconanworld.com' + image,
               });
            });
         });
      } catch (e) {
         console.log(e);
         res.status(500).json({ message: e.message });
      }
   };
}

module.exports = new MainController();
