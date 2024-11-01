+import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

+export class addPupilIdToPencilsTable1730450998079 implements MigrationInterface {
+    public async up(queryRunner: QueryRunner): Promise<void> {
+        await queryRunner.addColumn('pencils', new TableColumn({
+            name: 'pupil_id',
+            type: 'int',
+        }));
+
+        await queryRunner.createForeignKey('pencils', new TableForeignKey({
+            columnNames: ['pupil_id'],
+            referencedColumnNames: ['id'],
+            referencedTableName: 'pupils',
+            onDelete: 'CASCADE',
+        }));
+    }
+
+    public async down(queryRunner: QueryRunner): Promise<void> {
+        const table = await queryRunner.getTable('pencils');
+        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('pupil_id') !== -1);
+        await queryRunner.dropForeignKey('pencils', foreignKey);
+        await queryRunner.dropColumn('pencils', 'pupil_id');
+    }
+}