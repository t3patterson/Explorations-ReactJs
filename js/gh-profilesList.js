var users = [
'APartingGlass'
// 'cjros',
// 't3patterson',
// 'paulesaad',
// 'matthiasak'
]



var getUserGHProfile(user){
	return $.get((user)=>return `https://api.github.com/users/${user}`)
}

$.when( users.forEach(function(user){ getUserGHProfile(user)}).then(function(){

	console.log(args)

})