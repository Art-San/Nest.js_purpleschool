import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config/dist'
type OldType = {
	name: string
	age: string
}

type NewType = {
	name: string
	age: number
}

const oldPerson: OldType = {
	name: 'John',
	age: '25',
}

@Injectable()
export class AppService {
	constructor(private readonly configService: ConfigService) {}
	getHello(): string {
		const test = this.configService.get('TEST')
		console.log(10, 'AppService', test)
		const newPerson = this.mapToNewType(oldPerson)
		console.log(20, 'AppService', newPerson) // { name: 25, age: 25 }
		return 'Hello World!'
	}

	mapToNewType(oldObj: OldType): NewType {
		return {
			name: oldObj.name,
			age: Number(oldObj.age),
		}
	}
}
