import { Injectable } from '@nestjs/common'

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
	getHello(): string {
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
