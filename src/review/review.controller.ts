import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ReviewModel } from './review.model'
import { ReviewService } from './review.service'
import { CreateReviewDto } from './dto/create-review.dto'

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}
	// @Get()
	// async getAll() {
	// 	return this.reviewService.findAll()
	// }

	@Post('create')
	async create(@Body() dto: CreateReviewDto) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Get('byProduct/:productId')
	async getProduct(@Param('productId') productId: string) {}
}
