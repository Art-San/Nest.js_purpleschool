import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User> // Это документ который возвращается из монго
@Schema()
export class User {
	@Prop({ required: true })
	email: string

	@Prop({ required: true })
	password: string

	@Prop([String])
	image: string[]
}

export const UserSchema = SchemaFactory.createForClass(User)
