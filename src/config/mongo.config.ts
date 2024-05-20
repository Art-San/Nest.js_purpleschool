import { ConfigService } from '@nestjs/config' // Доступ до ENV
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose'

// interface IMongoConfig {
// 	uri: string
// }

export const getMongoConfig = async (
	configService: ConfigService
): Promise<MongooseModuleFactoryOptions> => ({
	uri: getMongoString(configService),
	...getMongoOptions(),
})

const getMongoString = (configService: ConfigService) =>
	'mongodb://' +
	configService.get('MONGO_LOGIN') +
	':' +
	configService.get('MONGO_PASSWORD') +
	'@' +
	configService.get('MONGO_HOST') +
	':' +
	configService.get('MONGO_PORT') +
	'/' +
	configService.get('MONGO_AUTHDATABASE')

const getMongoOptions = () => {}

// export const getMongoConfig = async (
// 	configService: ConfigService
// ): Promise<MongooseModuleFactoryOptions> => ({
// 	uri: configService.get('MONGO_URI'),
// })

// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
