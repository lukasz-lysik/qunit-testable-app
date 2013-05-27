using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using QUnitTestableApp.Controllers;
using System.Web.Mvc;

namespace QUnitTestableApp.Tests
{
	[TestClass]
	public class ProductControllerTests
	{
		[TestMethod]
		public void IndexTest()
		{
			var controller = new ProductController();
			var result = controller.Index() as ViewResult;
			Assert.AreEqual("ProductsList", result.ViewName);
		}
	}
}
