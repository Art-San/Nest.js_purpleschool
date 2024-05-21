import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

class ProductCharacteristic {
	@Prop()
	name: string

	@Prop()
	value: string
}

export type ProductDocument = HydratedDocument<ProductModel>
@Schema({
	versionKey: false,
	timestamps: true,
	validateBeforeSave: true,
})
export class ProductModel {
	@Prop()
	image: string

	@Prop()
	title: string

	@Prop()
	price: number

	@Prop()
	oldPrice: number

	@Prop()
	credit: number

	@Prop()
	calculateRating: number

	@Prop()
	description: string

	@Prop()
	advantages: string

	@Prop()
	disAdvantages: string

	@Prop({ type: () => [String] })
	categories: string[]

	@Prop({ type: () => [String] })
	tags: string[]

	@Prop({ type: () => [ProductCharacteristic], _id: false })
	characteristics: ProductCharacteristic[]

	@Prop({ default: Date.now })
	createdAt: Date

	@Prop({ default: Date.now })
	updatedAt: Date
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel)
