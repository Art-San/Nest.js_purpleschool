import { ConfigService } from '@nestjs/config' // Доступ до ENV
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose'

export const getMongoConfig = async (
	configService: ConfigService
): Promise<MongooseModuleFactoryOptions> => ({
	// uri: 'mongodb://admin:admin@localhost:27017/admin',
	uri: configService.get('MONGO_URI'),
})

// DOCER
// export const getMongoConfig = async (
// 	configService: ConfigService
// ): Promise<MongooseModuleFactoryOptions> => ({
// 	uri: getMongoString(configService),
// })

// const getMongoString = (configService: ConfigService) =>
// 	'mongodb://' +
// 	configService.get('MONGO_LOGIN') +
// 	':' +
// 	configService.get('MONGO_PASSWORD') +
// 	'@' +
// 	configService.get('MONGO_HOST') +
// 	':' +
// 	configService.get('MONGO_PORT') +
// 	'/' +
// 	configService.get('MONGO_AUTHDATABASE')
