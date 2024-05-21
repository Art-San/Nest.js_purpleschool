import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MSchema } from 'mongoose'
import { User } from './user.model'

export type PostDocument = HydratedDocument<Post> // Это документ который возвращается из монго
@Schema({
	versionKey: false,
	timestamps: true,
	validateBeforeSave: true,
})
export class Post {
	@Prop()
	title: string

	@Prop()
	text: string

	@Prop({ type: MSchema.Types.ObjectId, ref: User.name })
	author: User

	@Prop({ default: Date.now })
	createdAt: Date

	@Prop({ default: Date.now })
	updatedAt: Date
}

export const PostSchema = SchemaFactory.createForClass(Post)
// `validateBeforeSave: true` - Проверяет валидность документа перед
// его сохранением в базу данных. Если документ не проходит проверку
// валидации, будет выброшено исключение.
// РЕШЕНИЕ timestamps
// https://stackoverflow.com/questions/77993129/how-to-manage-timestamps-in-schema-in-nestjs-without-explicitly-defining-created
// @Schema({
//   versionKey: false,
//   timestamps: true,
//   validateBeforeSave: true,
// })
// class Post extends Document {
//   @Prop({ required: true })
//   firstName: string;

//   @Prop({ required: true })
//   lastName: string;

//   @Prop({ required: true, unique: true })
//   email: string;

//   @Prop({ required: true })
//   password: string;

//   @Prop({ enum: ['admin', 'Post'], default: 'Post' })
//   role: string;

//   @Prop({ default: Date.now })
//   createdAt: Date;

//   @Prop({ default: Date.now })
//   updatedAt: Date;
// }
