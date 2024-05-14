import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPayloadColumn1715588106316 implements MigrationInterface {
  name = 'AddPayloadColumn1715588106316';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "emails" ADD "payload" text DEFAULT ''`,
    );
    await queryRunner.query(`ALTER TABLE "sms" ADD "payload" text DEFAULT ''`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "sms" DROP COLUMN "payload"`);
    await queryRunner.query(`ALTER TABLE "emails" DROP COLUMN "payload"`);
  }
}
