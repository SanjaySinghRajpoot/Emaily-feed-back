const passport = require('./routes/services/passport');
const { googleClientID, googleClientSecret } = require('./config/keys');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL: '/auth/google/callback'  //URL when they get verified by Google 
},

(accessToken, refreshToken, profile, done ) => {
      console.log('accesToken: ', accessToken);
      console.log('refresh Token: ', refreshToken);
      console.log('profile: ',profile);
})
); //new instance 