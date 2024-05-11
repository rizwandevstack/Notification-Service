import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEmailAndSMSSchemas1715432185387 implements MigrationInterface {
    name = 'CreateEmailAndSMSSchemas1715432185387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sms_vars" ("name" character varying(255) NOT NULL, "value" character varying(255), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_30b043743855ab7fc52c93dc7d4" PRIMARY KEY ("name"))`);
        await queryRunner.query(`CREATE TYPE "public"."sms_type_enum" AS ENUM('A', 'V', 'B')`);
        await queryRunner.query(`CREATE TABLE "sms" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" character varying(255), "type" "public"."sms_type_enum" NOT NULL, CONSTRAINT "PK_60793c2f16aafe0513f8817eae8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sms_ml" ("sms_id" integer NOT NULL, "lang_id" integer NOT NULL, "body" text NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_e1d123cde6e88863dcaaaa09126" PRIMARY KEY ("sms_id"))`);
        await queryRunner.query(`CREATE TABLE "email_vars" ("name" character varying(255) NOT NULL, "value" character varying(255), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_15a577a94caf9747c71282dd52f" PRIMARY KEY ("name"))`);
        await queryRunner.query(`CREATE TYPE "public"."emails_type_enum" AS ENUM('A', 'V', 'B')`);
        await queryRunner.query(`CREATE TABLE "emails" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" character varying(255), "type" "public"."emails_type_enum" NOT NULL, CONSTRAINT "PK_a54dcebef8d05dca7e839749571" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "email_ml" ("email_id" integer NOT NULL, "lang_id" integer NOT NULL, "subject" character varying(255) NOT NULL, "body" text NOT NULL, "cc" character varying(255), "bcc" character varying(255), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_39eba30e22a044de0e94fec0445" PRIMARY KEY ("email_id"))`);
        await queryRunner.query(`ALTER TABLE "sms_ml" ADD CONSTRAINT "FK_e1d123cde6e88863dcaaaa09126" FOREIGN KEY ("sms_id") REFERENCES "sms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "email_ml" ADD CONSTRAINT "FK_39eba30e22a044de0e94fec0445" FOREIGN KEY ("email_id") REFERENCES "emails"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "email_ml" DROP CONSTRAINT "FK_39eba30e22a044de0e94fec0445"`);
        await queryRunner.query(`ALTER TABLE "sms_ml" DROP CONSTRAINT "FK_e1d123cde6e88863dcaaaa09126"`);
        await queryRunner.query(`DROP TABLE "email_ml"`);
        await queryRunner.query(`DROP TABLE "emails"`);
        await queryRunner.query(`DROP TYPE "public"."emails_type_enum"`);
        await queryRunner.query(`DROP TABLE "email_vars"`);
        await queryRunner.query(`DROP TABLE "sms_ml"`);
        await queryRunner.query(`DROP TABLE "sms"`);
        await queryRunner.query(`DROP TYPE "public"."sms_type_enum"`);
        await queryRunner.query(`DROP TABLE "sms_vars"`);
    }

}
