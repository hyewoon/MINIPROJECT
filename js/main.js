window.onload =function(){
	
	const PREV = document.querySelector(".prev");
	const NEXT = document.querySelector(".next");
	const POSTS = document.querySelector("#posts");
	
	let postIndex = 0;
	
	NEXT.addEventListener("click", function(){
		postIndex++;
		
		if(postIndex>=3)postIndex=0;
		
		let coords = -980*postIndex+"px";
		POSTS.style.marginLeft = coords;
	
	})
	
	PREV.addEventListener("click", function(){
		postIndex--;
		
		if(postIndex<0)postIndex=2;
		
		let coords = -980*postIndex+"px";
		POSTS.style.marginLeft = coords;
	})
} 
	
	
