import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRole } from './user.entity';
import { Repository, Not } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAllWithCategories() {
        return this.userRepository.find({
            where: { role: Not(UserRole.ADMIN) },
            select: ['id', 'name', 'email', 'allowedCategories', 'role'],
        });
    }
    async findUserAllowedCategories(userId: number) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            select: ['id', 'email', 'allowedCategories'],
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return {
            email: user.email,
            allowedCategories: user.allowedCategories || [],
        };
    }

    async updateAllowedCategories(userId: number, allowedCategories: string[]) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new NotFoundException('User not found');
        }

        user.allowedCategories = allowedCategories;
        return this.userRepository.save(user);
    }

}
