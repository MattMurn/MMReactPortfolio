const axios = require('axios');
// const moment = require('moment');
const db = require('../../models')

module.exports = function(app)  {
    app.post('/ipInfo', (req, res) => {
        let ip = req.body.ip;
    //    console.log(`response: ${res.body}, request: ${req.body.ip}`)
            axios.get(`http://api.ipstack.com/${ip}?access_key=e3af7c52287a4cc971a2caa31e54fb6b`)
            .then(data => {
                let i = data.data;
                let userIp = {
                    ip: i.ip,
                    country_name: i.country_name,
                    region_name: i.region_name,
                    city: i.city,
                    zip: i.zip,
                    lat: i.latitude,
                    long: i.longitude,
                    time: JSON.stringify(new Date())
                }
                console.log(`IP USER INFORMATION IS: ${userIp.city}`);
                //make db post here.
                db.ipInfo.create(userIp).then(data => console.log(data));
                res.send(userIp.city);
            })
        })
    }


