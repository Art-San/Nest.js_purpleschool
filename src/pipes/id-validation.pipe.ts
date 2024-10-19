import {
	ArgumentMetadata,
	BadRequestException,
	Injectable,
	PipeTransform,
} from '@nestjs/common'
import { Types } from 'mongoose'

@Injectable()
export class IdValidationPipe implements PipeTransform<string> {
	transform(value: string, metadata: ArgumentMetadata): string {
		if (!this.isValidObjectId(value)) {
			throw new BadRequestException('Неверный формат ID')
		}
		return value
	}

	private isValidObjectId(id: string): boolean {
		return !Types.ObjectId.isValid(id)
	}
}
