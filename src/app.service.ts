import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config/dist'
type OldType = {
	name: string
	age: string
}

type NewType = {
	name: number
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
		console.log(0, test)
		const newPerson = this.mapToNewType(oldPerson)
		console.log(newPerson) // { name: 25, age: 25 }
		return 'Hello World!'
	}

	mapToNewType(oldObj: OldType): NewType {
		return {
			name: Number(oldObj.name),
			age: Number(oldObj.age),
		}
	}
}
