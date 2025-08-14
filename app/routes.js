//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// when users submit an email address they will be taken to the confirm code page

router.post('/new/email-address', (req, res) => {
    res.redirect('/new/code')
})

// when users submit a code they will be taken to the name page 

router.post('/new/code', (req, res) => {
    res.redirect('/new/name')
})

// when users enter their name, they will be taken to the country page

router.post('/new/name', (req, res) => {
    if(req.query.returnUrl) {
    res.redirect(req.query.returnUrl)
    } else {
    res.redirect('/new/country')
}})

// when users submit a country they will be taken to the juggling balls page (radio buttons)

router.post('/new/country', (req, res) => {
        if(req.query.returnUrl) {
    res.redirect(req.query.returnUrl)
    } else {
    res.redirect('/new/juggling-balls')
}})

// when users tell us how many balls they can juggle, we will either proceed to juggling tricks or inform them they are not eligible for a license

router.post('/new/juggling-balls', (req, res) => {
    if (req.body.new.numberOfBalls == 'None- I cannot juggle'){
    res.redirect('/new/not-eligible')
    } else
    res.redirect('/new/juggling-trick')
    
})

// when users submit a country they will be taken to the juggling balls page (radio buttons)

router.post('/new/juggling-trick', (req, res) => {
        if(req.query.returnUrl) {
    res.redirect(req.query.returnUrl)
    } else {
    res.redirect('/new/juggling-objects')
}})

// when users submit a objects they will be taken to check your answers

router.post('/new/juggling-objects', (req, res) => {
    res.redirect('/new/check')
})

// when users submit on check your answers they will see a confirmation page

router.post('/new/check', (req, res) => {
    res.redirect('/new/confirmation')
})