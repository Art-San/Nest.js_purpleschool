import { ConfigService } from '@nestjs/config' // Доступ до ENV
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose'

// interface IMongoConfig {
// 	uri: string
// }

export const getMongoConfig = async (
	configService: ConfigService
): Promise<MongooseModuleFactoryOptions> => ({
	uri: getMongoString(configService),
	// ...getMongoOptions(),
	// https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options:~:text=Replaces%20%60res.n%60-,No%20More%20Deprecation%20Warning%20Options,-useNewUrlParser%2C%20useUnifiedTopology
})

// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
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

const getMongoOptions = () => ({
	// https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options:~:text=Replaces%20%60res.n%60-,No%20More%20Deprecation%20Warning%20Options,-useNewUrlParser%2C%20useUnifiedTopology
	// useNewUrlParser: true,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
})
