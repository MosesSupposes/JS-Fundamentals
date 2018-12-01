// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

// Basic example
function foo() {
	var a = 2;

	function bar() {
		console.log( a );
	}

	bar(); 
}

foo(); // 2

// Another basic example using jQuery's ajax mehtod
function sendRequest() {
    const requestID = '123';
    $.ajax({
        url: '/myUrl',
        success: function(response) {
            alert('Request' + requestID + 'returned')
        }
    });
}

// Closure with higher order function
const createAdder = x => y => x + y;

const add3 = createAdder(3);

console.log(add3(2)); // 5
console.log(add3(3)); // 6

// Here's a more practical example of using closure in conjunction with a higher order function.

const request = options => {
    return fetch(options.url, options)
        .then(resp => resp.json());
};

const usersPromise = request({
    url: '/users',
    headers: { 'X-Custom': 'mykey' } // boilerplate
});

const tasksPromise = request({
    url: '/tasks',
    headers: { 'X-Custom': 'mykey' } // boilerplate
});

// Do you see how each API call reqiures the same header code (lines 29 and 34)? Here's how we can utilize a closure from a higher order function to eliminate the boilerplate

const createRequester = options => {
    return otherOptions => {
        return request(Object.assign(
           {}, options, otherOptions 
        ));
    };
};

const customRequest = createRequester({
    headers: { 'X-Custom': 'mykey' } 
});

const usersPromise = customRequest({url: '/users'});
const tasksPromise = customRequest({url: '/tasks'});

