(function(){
    
    function ThingController($routeParams, $location){
        var images = {
            car : 'http://pngimg.com/upload/audi_PNG1736.png',
            apple: 'http://eathealthylivefit.com/wp-content/uploads/2013/02/apple-red-e1361844844713.jpg',
            coffee: 'http://shop.java.be/gifs/over-kopje.jpg'
        }
        $location.url('/myfancyerrorpage')
        this.image = images[$routeParams.thing]
    }
    
    
    
    
    angular.module('demoApp').controller('ThingController', ThingController);    
})()
















//$routeParams.thing