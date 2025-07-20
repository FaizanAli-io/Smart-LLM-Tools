// user-with-categories.dto.ts
import { UserRole } from '../user.entity';

export class UserWithCategoriesDto {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  allowedCategories: string[];
}
