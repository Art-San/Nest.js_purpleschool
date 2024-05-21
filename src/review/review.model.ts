import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ReviewDocument = HydratedDocument<ReviewModel>
@Schema({
	versionKey: false,
	timestamps: true,
	validateBeforeSave: true,
})
export class ReviewModel {
	@Prop()
	name: string

	@Prop()
	title: string

	@Prop()
	description: string

	@Prop()
	rating: number

	@Prop({ default: Date.now })
	createdAt: Date

	@Prop({ default: Date.now })
	updatedAt: Date
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel)
