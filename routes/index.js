var express = require('express');
var router = express.Router();
var serviceRequests = require('../serviceRequests')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Appointment Schedule', serviceRequests  });
});

/* GET Service create form  */
/* TODO: point to template named "serviceForm" */
router.get('/new', (req, res) => {
  res.send('NOT IMPLEMENTED: Service Create GET');
})

/* POST Service create handler  */
router.post('/new', (req, res) => {
  res.send('NOT IMPLEMENTED: Service Create POST');
})


module.exports = router;
