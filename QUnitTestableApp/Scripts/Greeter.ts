module GreeterModule {
	export class Greeter {

		private name: string;

		constructor(name: string) {
			this.name = name;
		}

		Greet() {
			return "Hello, " + this.name;
		}
	}
}