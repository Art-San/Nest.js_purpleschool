import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { ReviewDocument, ReviewModel } from './review.model'
import { InjectModel } from '@nestjs/mongoose'
import { CreateReviewDto } from './dto/create-review.dto'

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel.name) private reviewModel: Model<ReviewDocument>
	) {}

	async findAll() {
		return await this.reviewModel.find()
	}

	//
	async create(dto: CreateReviewDto): Promise<ReviewDocument> {
		return this.reviewModel.create(dto)
	}
}
