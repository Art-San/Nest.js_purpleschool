import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<TopPageModel> //

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export class HhData {
	count: number

	juniorSalary: number

	middleSalary: number

	seniorSalary: number

	updatedAt: Date
}

export class TopPageAdvantage {
	title: string

	description: string
}

export class TopPageModel {
	_id: string
	firstCategory: TopLevelCategory
	secondCategory: string
	title: string
	category: string

	hh?: HhData

	advantages?: TopPageAdvantage[]

	seoText?: string

	tagsTitle: string

	tags: string[]
}

export const TopPagSchema = SchemaFactory.createForClass(TopPageModel)
