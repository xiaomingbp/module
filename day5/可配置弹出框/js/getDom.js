define(function(){
	return {
		Id(text){
			return document.querySelector(text)
		},
		getClass(text){
			return [...document.querySelectorAll(text)]
		}
	}
})