import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User> // Это документ который возвращается из монго
@Schema({
	versionKey: false,
	timestamps: true,
	validateBeforeSave: true,
})
export class User {
	@Prop({ required: true })
	email: string

	@Prop({ required: true })
	password: string

	@Prop([String])
	image: string[]

	@Prop({ default: Date.now })
	createdAt: Date

	@Prop({ default: Date.now })
	updatedAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
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
// class User extends Document {
//   @Prop({ required: true })
//   firstName: string;

//   @Prop({ required: true })
//   lastName: string;

//   @Prop({ required: true, unique: true })
//   email: string;

//   @Prop({ required: true })
//   password: string;

//   @Prop({ enum: ['admin', 'user'], default: 'user' })
//   role: string;

//   @Prop({ default: Date.now })
//   createdAt: Date;

//   @Prop({ default: Date.now })
//   updatedAt: Date;
// }
