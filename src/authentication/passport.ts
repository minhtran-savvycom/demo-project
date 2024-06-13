import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { dataSource } from '../setting/configuration';
import { User } from '../shared/entities/user.entity';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
};

passport.use(
  new Strategy(opts, async (payload: any, done: any) => {
    try {
      console.log('payload', payload);
      const user = await dataSource
        .getRepository(User)
        .findOneBy({ id: payload.id });

      if (user) return done(null, user);
    } catch (error) {
      return done(error);
    }
  }),
);

export default passport;
