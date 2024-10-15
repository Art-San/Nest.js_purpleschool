import { Injectable } from '@nestjs/common'
import { Model, Types } from 'mongoose'
import { ReviewDocument, ReviewModel } from './review.model'
import { InjectModel } from '@nestjs/mongoose'
import { CreateReviewDto } from './dto/create-review.dto'

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel.name) private reviewModel: Model<ReviewDocument>
	) {}

	async create(dto: CreateReviewDto): Promise<ReviewDocument> {
		return this.reviewModel.create(dto)
	}

	async delete(id: string): Promise<ReviewDocument> | null {
		return await this.reviewModel.findByIdAndDelete(id).exec()
	}

	async findByProductId(productId: string): Promise<ReviewDocument[]> | null {
		return await this.reviewModel
			.find({
				productId: productId,
			})
			.exec()
	}

	async findAll() {
		return await this.reviewModel.find()
	}

	// async deleteByProductId(productId: string) {
	// 	return await this.reviewModel
	// 		.deleteMany({
	// 			productId: new Types.ObjectId(productId),
	// 		})
	// 		.exec()
	// }
}
