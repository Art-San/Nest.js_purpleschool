import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'
import { Types, disconnect } from 'mongoose'

import { AuthDto } from '../src/auth/dto/auth.dto'
import {
	USER_NOT_FOUND_ERROR,
	WRONG_PASSWORD_ERROR,
} from '../src/auth/auth.constants'

const loginDto: AuthDto = {
	login: '11@m.ru',
	password: '123456',
}

// const loginDtoErrPassword: AuthDto = {
// 	login: '11@m.ru',
// 	password: '12345',
// }
// const loginDtoErrLogin: AuthDto = {
// 	login: '11@m.r',
// 	password: '123456',
// }

describe('AuthController (e2e)', () => {
	let app: INestApplication

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile()

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	it('/auth/login (POST) - success', async () => {
		const { body } = await request(app.getHttpServer())
			.post('/auth/login')
			.send(loginDto)
			.expect(200)

		expect(body.access_token).toBeDefined()
	})

	it('/auth/login (POST) - ErrPassword', async () => {
		const response = await request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, password: '12345' })
			.expect(401, {
				statusCode: 401,
				message: WRONG_PASSWORD_ERROR,
				error: 'Unauthorized',
			})
	})

	it('/auth/login (POST) - ErrLogin', async () => {
		const response = await request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, login: '11@m.r' })
			.expect(401, {
				statusCode: 401,
				message: USER_NOT_FOUND_ERROR,
				error: 'Unauthorized',
			})
	})

	afterAll(() => {
		disconnect()
	})
})
