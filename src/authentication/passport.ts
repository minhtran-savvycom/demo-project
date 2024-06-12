import { ExtractJwt, Strategy } from 'passport-jwt';
import passport from 'passport';
const UserModel = require('./model.js');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
};

passport.use(
  new Strategy(opts, async (payload: any, done: any) => {
    try {
      const user = UserModel.findById(payload.id);
      if (user) return done(null, user);
    } catch (error) {
      return done(error);
    }
  }),
);
