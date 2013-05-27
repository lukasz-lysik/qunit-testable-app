/// <reference path="../Greeter.ts" />
/// <reference path="../Definitions/qunit/qunit.d.ts" />

QUnit.test("Simple test", function () {
	var greeter = new GreeterModule.Greeter("Lukasz");
	var result = greeter.Greet();
	QUnit.equal(result, "Hello, L", "Greeting does not equal");
});