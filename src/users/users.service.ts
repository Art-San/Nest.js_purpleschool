import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './models/user.model'
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async getByEmail(email: string) {
		return await this.userModel.findOne({ email })
	}

	async createUser({ email, password }: { email: string; password: string }) {
		const newUser = new this.userModel({ email, password })

		return await newUser.save()
		// return newUser
	}

	async findAll() {
		return await this.userModel.find()
	}

	findOne(id: number) {
		return `This action returns a #${id} user`
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`
	}

	remove(id: number) {
		return `This action removes a #${id} user`
	}
}
