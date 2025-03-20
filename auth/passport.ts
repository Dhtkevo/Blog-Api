import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import { getSpecificUser } from "../db/queries.js";
import "dotenv/config";

const jwt_secret = process.env.JWT_SECRET;
if (!jwt_secret) {
  throw new Error("JWT_SECRET NOT SET IN .ENV File");
}

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwt_secret,
};

passport.use(
  new Strategy(opts, async (payload: any, done: any) => {
    try {
      const user = await getSpecificUser(payload.id);
      if (user) return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);
