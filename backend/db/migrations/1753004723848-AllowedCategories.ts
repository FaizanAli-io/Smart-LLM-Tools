import { MigrationInterface, QueryRunner } from "typeorm";

export class AllowedCategories1753004723848 implements MigrationInterface {
    name = 'AllowedCategories1753004723848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "allowedCategories" SET DEFAULT ARRAY[]::text[]`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "allowedCategories" SET DEFAULT ARRAY[]`);
    }

}
