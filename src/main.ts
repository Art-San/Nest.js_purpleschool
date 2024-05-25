import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors()
	app.setGlobalPrefix('api')

	await app.listen(process.env.PORT || 3000)
	console.log(`Сервер запущен na порту ${process.env.PORT}`)
}
bootstrap()
