import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserTable1744734414130 implements MigrationInterface {
    name = 'UpdateUserTable1744734414130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isVerified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user" ADD "emailVerificationToken" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "emailVerificationToken"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isVerified"`);
    }

}
