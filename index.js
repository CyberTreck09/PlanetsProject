const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlaces = [];




fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', data => {
        habitablePlaces.push(data);
    })
    .on('error', err => {
        console.log(err);
    })
    .on('end', () => {
        console.log(habitablePlaces);
        console.log("done!!");
    });