import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './models/user.model'
import { Post, PostSchema } from './models/post.model'

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: User.name,
				schema: UserSchema,
				collection: 'User',
			},
			{
				name: Post.name,
				schema: PostSchema,
				collection: 'Post',
			},
		]),
	],
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
