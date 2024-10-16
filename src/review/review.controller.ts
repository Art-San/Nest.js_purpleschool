import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	UsePipes,
	Param,
	Post,
	ValidationPipe,
} from '@nestjs/common'
import { ReviewModel } from './review.model'
import { ReviewService } from './review.service'
import { CreateReviewDto } from './dto/create-review.dto'
import { REVIEW_NOT_FOUND } from './review.constants'
import { IdValidationPipe } from 'src/pipes/id-validation.pipe'

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviewDto) {
		console.log()
		return this.reviewService.create(dto)
	}

	@Get('byProduct/:productId')
	async getProduct(@Param('productId') productId: string) {
		return this.reviewService.findByProductId(productId)
	}

	@Delete(':id')
	// @UsePipes(new IdValidationPipe())
	async delete(@Param('id') id: string) {
		try {
			const deletedDoc = await this.reviewService.delete(id)
			if (!deletedDoc) {
				throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
			}
			return { msg: 'Удалено' }
		} catch (error) {
			throw error
		}
	}

	@Get()
	async getAll() {
		return this.reviewService.findAll()
	}

	// @Delete(':id')
	// async delete(@Param('id') id: string) {
	// 	const deletedDoc = this.reviewService.delete(id)
	// 	if (!deletedDoc) {
	// 		throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
	// 	}
	// }
}
