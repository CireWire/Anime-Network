//Calling the AngularJS controller.

app.controller('MainController',
['$scope', function($scope){
	$scope.showings =[
	{
		name:'Blue Exorcist',
		pic: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Ao_no_exorcist_DVD_cover.jpg',
		about: "On their way to reinforce the barrier that protects their city from demons, student exorcist Rin (Nobuhiko Okamoto) and his twin brother encounter a demon disguised as a young boy.",
		likes: 0,
		dislikes: 0
	},
	{
		name: 'Chobits',
		pic: 'http://cache.coverbrowser.com/image/tv-series/6158-1.jpg',
		about: 'When computers start to look like humans, can love remain the same?',
		likes: 0,
		dislikes: 0
	},
	{
		name: 'Gungrave',
		pic: 'http://i43.tower.com/images/mm107090036/gungrave-vol-5-dvd-cover-art.jpg',
		about: "Gungrave opens thirteen years after Brandon Heat is betrayed and killed by his best friend Harry MacDowell. He is reborn through the use of necrolyze as Beyond The Grave, and begins a quest of revenge against the crime syndicate. The series then backtracks to Brandon's youth, and follows him and Harry as they rise through the criminal underworld, detailing the circumstances that led to their eventual falling-out.",
		likes: 0,
		dislikes: 0
	}];
	//increase likes by 1
	$scope.plusOne = function(index){
		$scope.showings[index].likes +=1;
	};
	//increase, NOT DECREASE, dislikes by 1
	$scope.minusOne= function(index){
		$scope.showings[index].dislikes +=1;
	};
}]);
