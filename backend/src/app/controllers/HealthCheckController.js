const moment = require('moment');
class HealthCheckController {

    index(_, res){
        const healthcheck = {
            uptime: process.uptime(),
            message: 'OK',
            date: moment()
        };
        try {
            return res.status(200).json(healthcheck);
        } catch (error) {
            healthcheck.message = error;
            return res.status(503).json({message: "HealthCheck error"});
        }
    }

}

module.exports =  new HealthCheckController()