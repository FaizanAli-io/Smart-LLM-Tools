import {
  Controller,
  Get,
  UseGuards,
  Patch,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from './user.entity';
import { GetUser } from '../auth/decorators/get-user.decorator'; // ✅ import GetUser

@Controller('admin')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('my-categories')
  getMyAllowedCategories(@GetUser() user: any) {
    return this.userService.findUserAllowedCategories(user.userId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get('users-with-categories')
  getUsersWithCategories() {
    return this.userService.findAllWithCategories();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id/categories')
  async updateAllowedCategories(
    @Param('id', ParseIntPipe) userId: number,
    @Body('allowedCategories') allowedCategories: string[],
  ) {
    return this.userService.updateAllowedCategories(userId, allowedCategories);
  }
}
