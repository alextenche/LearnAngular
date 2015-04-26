(function(){
	var customerFactory = function(){
		var customers = [
			{
				id: 1,
				joined: '2000-12-02',
				name:'John',
				city:'Barcelona',
				orderTotal:9.9956,
				orders: [
					{
						id: 1,
						product: 'Shoes',
						total: 9.9956
					}
				]
			},
			{
				id: 2,
				joined: '1965-01-25',
				name:'Alex',
				city:'Timisoara',
				orderTotal:19.99,
				orders:[
					{
						id: 2,
						product: 'Baseball',
						total: 9.995
					},
					{
						id: 3,
						product: 'Bat',
						total: 9.995
					}
				]
			},
			{
				id: 3,
				joined: '1944-06-15',
				name:'Tina',
				city:'New York',
				orderTotal:44.99,
				orders: [
					{
						id: 4,
						product: 'Headphones',
						total: 44.99
					}
				]
			},
			{
				id: 4,
				joined: '1995-03-28',
				name:'Dave',
				city:'Seattle',
				orderTotal:101.5,
				orders: [
					{
						id: 5,
						product: 'Kindle',
						total: 101.50
					}
				]
			}
		];

		var factory = {};

		factory.getCustomers = function(){
			return customers;
		};

		// search the customers for the customerId
		factory.getCustomer = function(customerId){
			for(var i = 0, len = customers.length; i < len; i++){
				if(customers[i].id === parseInt(customerId)){
					return customers[i];
				} 
			}
			return {};
		}

		return factory;
	};

	angular.module('customersApp').factory('customersFactory', customerFactory);

}());