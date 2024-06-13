import { User } from './shared/entities/user.entity'; // Adjust the path as necessary

declare global {
  namespace Express {
    interface User {
      id: string; // or number, depending on your User entity's ID type
    }

    interface Request {
      user?: User;
    }
  }
}
