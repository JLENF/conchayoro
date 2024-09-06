/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';
@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'sqlite',
			omitNull: true,
			autoLoadModels: true,
			synchronize: true,
		}),
		ProductsModule,
	],
})
export class AppModule {}
