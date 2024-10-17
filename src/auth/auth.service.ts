import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthDto } from './dto/auth.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { UserDocument, UserModel } from './user.model'
import { compare, genSalt } from 'bcryptjs'
import { USER_NOT_FOUND_ERROR, WRONG_PASSWORD_ERROR } from './auth.constants'
import { hash } from 'crypto'
import { JwtService } from '@nestjs/jwt'

@Injectable() // указывает что это можно использовать как провайдер
export class AuthService {
	constructor(
		@InjectModel(UserModel.name)
		private readonly userModel: Model<UserDocument>,
		private readonly jwtService: JwtService
	) {}
	async createUser(dto: AuthDto) {
		const salt = await genSalt(10)
		const newUser = new this.userModel({
			email: dto.login,
			passwordHash: hash(dto.password, salt),
		})
		return newUser.save()
	}

	async findUser(email: string) {
		return this.userModel.findOne({ email }).exec()
	}

	async validateUser(
		email: string,
		password: string
	): Promise<Pick<UserModel, 'email'>> {
		const user = await this.findUser(email)
		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND_ERROR)
		}
		const isCorrectPassword = await compare(password, user.passwordHash)
		if (!isCorrectPassword) {
			throw new UnauthorizedException(WRONG_PASSWORD_ERROR)
		}
		return { email: user.email }
	}

	async login(email: string) {
		const payload = { email }
		return {
			access_token: await this.jwtService.signAsync(payload),
		}
	}
}
