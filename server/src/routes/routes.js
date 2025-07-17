
const express=require('express')
const router=express.Router();


const moviecontroller=require('../controller/moviescontroller');
const theatercontroller=require('../controller/theaterscontroller');
const bookingcontroller=require('../controller/bookingcontroller');
const customercontroller=require('../controller/customercontroller');
const ownercontroller=require('../controller/ownercontroller');
const screencontroller=require('../controller/screencontroller');
const showtimecontroller=require('../controller/showtimecontroller');
const usercontroller=require('../controller/usercontroller');

// const bookcontroller=require('../controller/book');
// const book = require('../model/book');

//defining routes of movie
router.get('/movie',moviecontroller.getallmovies);
router.get('/movie/:id',moviecontroller.getmovies);
router.post('/movie',moviecontroller.createmovies);
router.patch('/movie',moviecontroller.updatemovies);
router.delete('/movie/:id',moviecontroller.deletemovies);


//defining routes of theater
router.get('/theater',theatercontroller.getalltheaters);
router.post('/theater',theatercontroller.createtheater);


//defining routes of booking
router.get('/booking',bookingcontroller.getallbooking);
router.post('/booking',bookingcontroller.createbooking);


//defining routes of customer
router.get('/customer',customercontroller.getallcustomer);
router.post('/customer',customercontroller.createcustomer);


//defining routes of owner
router.get('/owner',ownercontroller.getallowner);
router.post('/owner',ownercontroller.createowner);


//defining routes of screen
router.get('/screen',screencontroller.getallscreens);
router.get('/screen/:id',screencontroller.getscreens);
router.post('/screen',screencontroller.createscreens);


//defining routes of showtime
router.get('/showtime',showtimecontroller.getallshowtime);
router.get('/showtime/:id',showtimecontroller.getshowtime);
router.post('/showtime',showtimecontroller.createshowtime);


//defining routes of user
router.get('/user',usercontroller.getalluser);
router.get('/user/:id',usercontroller.getuser);
router.post('/user',usercontroller.createuser);
//
// router.post('/book',bookcontroller.createbook);

module.exports=router;