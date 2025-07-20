// src/auth/admin.controller.ts
import { Controller, Get,Patch, UseGuards,Param,Body } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';
import { GetUser } from './decorators/get-user.decorator';
import { User } from '../users/user.entity';
import { UserRole } from '../users/user.entity';


@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  @Get('dashboard')
  @Roles(UserRole.ADMIN)
  getAdminDashboard(@GetUser() user: User) {
    return {
      message: `Welcome to the Admin Dashboard, ${user.name}`,
      user,
    };
  }

}
