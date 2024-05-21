import { Module } from '@nestjs/common'
import { TopPageController } from './top-page.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { TopPagSchema, TopPageModel } from './top-page.model'

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: TopPageModel.name,
				schema: TopPagSchema,
				collection: 'TopPag',
			},
		]),
	],
	controllers: [TopPageController],
})
export class TopPageModule {}
