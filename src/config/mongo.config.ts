import { ConfigService } from '@nestjs/config' // Доступ до ENV
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose'

export const getMongoConfig = async (
	configService: ConfigService
): Promise<MongooseModuleFactoryOptions> => ({
	// uri: 'mongodb://admin:admin@localhost:27017/admin',
	uri: configService.get('MONGO_URI'),
})

// Из видео вариан
// export const getMongoConfig = async (
// 	configService: ConfigService
// ): Promise<MongooseModuleFactoryOptions> => ({
// 	uri: getMongoString(configService),
// 	// Эти опции больше не нужны
// 	// https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options:~:text=Replaces%20%60res.n%60-,No%20More%20Deprecation%20Warning%20Options,-useNewUrlParser%2C%20useUnifiedTopology
// 	// ...getMongoOptions(),
// })

// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
// mongodb://admin:admin@127.0.0.1:27017/admin
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

// const getMongoOptions = () => ({
// 	Эти опции больше не нужны
// 	https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options:~:text=Replaces%20%60res.n%60-,No%20More%20Deprecation%20Warning%20Options,-useNewUrlParser%2C%20useUnifiedTopology
// 	useNewUrlParser: true,
// 	useCreateIndex: true,
// 	useUnifiedTopology: true,
// })
