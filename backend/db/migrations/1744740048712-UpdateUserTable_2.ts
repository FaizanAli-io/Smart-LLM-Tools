import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserTable21744740048712 implements MigrationInterface {
    name = 'UpdateUserTable21744740048712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "passwordResetToken" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "passwordResetToken"`);
    }

}
