import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateKeyName1715595221150 implements MigrationInterface {
  name = 'UpdateKeyName1715595221150';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sms_vars" RENAME COLUMN "isActive" TO "is_active"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sms_ml" RENAME COLUMN "isActive" TO "is_active"`,
    );
    await queryRunner.query(
      `ALTER TABLE "email_ml" RENAME COLUMN "isActive" TO "is_active"`,
    );
    await queryRunner.query(
      `ALTER TABLE "email_vars" RENAME COLUMN "isActive" TO "is_active"`,
    );
    await queryRunner.query(`ALTER TABLE "sms_vars" DROP COLUMN "is_active"`);
    await queryRunner.query(
      `ALTER TABLE "sms_vars" ADD "is_active" smallint NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(`ALTER TABLE "sms_ml" DROP COLUMN "is_active"`);
    await queryRunner.query(
      `ALTER TABLE "sms_ml" ADD "is_active" smallint NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(`ALTER TABLE "email_ml" DROP COLUMN "is_active"`);
    await queryRunner.query(
      `ALTER TABLE "email_ml" ADD "is_active" smallint NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(`ALTER TABLE "email_vars" DROP COLUMN "is_active"`);
    await queryRunner.query(
      `ALTER TABLE "email_vars" ADD "is_active" smallint NOT NULL DEFAULT '1'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "email_vars" DROP COLUMN "is_active"`);
    await queryRunner.query(
      `ALTER TABLE "email_vars" ADD "is_active" boolean NOT NULL DEFAULT true`,
    );
    await queryRunner.query(`ALTER TABLE "email_ml" DROP COLUMN "is_active"`);
    await queryRunner.query(
      `ALTER TABLE "email_ml" ADD "is_active" boolean NOT NULL DEFAULT true`,
    );
    await queryRunner.query(`ALTER TABLE "sms_ml" DROP COLUMN "is_active"`);
    await queryRunner.query(
      `ALTER TABLE "sms_ml" ADD "is_active" boolean NOT NULL DEFAULT true`,
    );
    await queryRunner.query(`ALTER TABLE "sms_vars" DROP COLUMN "is_active"`);
    await queryRunner.query(
      `ALTER TABLE "sms_vars" ADD "is_active" boolean NOT NULL DEFAULT true`,
    );
    await queryRunner.query(
      `ALTER TABLE "email_vars" RENAME COLUMN "is_active" TO "isActive"`,
    );
    await queryRunner.query(
      `ALTER TABLE "email_ml" RENAME COLUMN "is_active" TO "isActive"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sms_ml" RENAME COLUMN "is_active" TO "isActive"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sms_vars" RENAME COLUMN "is_active" TO "isActive"`,
    );
  }
}
