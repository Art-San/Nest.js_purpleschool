import { Injectable } from '@nestjs/common'
import { AuthDto } from './dto/auth.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { UserDocument, UserModel } from './user.model'
import { genSaltSync, hashSync } from 'bcryptjs'

@Injectable() // указывает что это можно использовать как провайдер
export class AuthService {
	constructor(
		@InjectModel(UserModel.name) private readonly userModel: Model<UserDocument>
	) {}
	async createUser(dto: AuthDto) {
		const salt = genSaltSync(10)
		const newUser = new this.userModel({
			email: dto.login,
			passwordHash: hashSync(dto.password, salt),
		})
		return newUser.save()
	}

	async findUser(email: string) {
		return this.userModel.findOne({ email }).exec()
	}
}
