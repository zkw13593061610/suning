window.onload=function(){
	let wen=document.getElementsByClassName("wen")[0];
	let aside=wen.getElementsByClassName("aside")[0];
	let box=aside.getElementsByClassName("box");
	let xuanxiangka=aside.getElementsByClassName("xuanxiangka");
	for (let i=0;i<box.length;i++){
		box[i].onmouseenter=function(){
			for (let j=0;j<box.length;j++){
				xuanxiangka[j].style.display="none";
			}
			xuanxiangka[i].style.display="block";
			xuanxiangka[i].style.width="999px";
			xuanxiangka[i].style.transition="all 0s";
			xuanxiangka[i].style.borderRight="1px solid #333";
			xuanxiangka[i].style.borderTop="1px solid #333";
			xuanxiangka[i].style.borderBottom="1px solid #333";
		}
		box[i].onmouseleave=function(){
			xuanxiangka[i].style.width="0";
			xuanxiangka[i].style.transition="all .5s";
			xuanxiangka[i].style.border="0";
		}
	}
	let b=wen.getElementsByClassName("b")[0];
	let a=b.getElementsByTagName("a");
	let t=setInterval(fn,2000);
	let btns1=wen.getElementsByClassName("btns1")[0];
	let btns2=wen.getElementsByClassName("btns2")[0];
	let ban=wen.getElementsByClassName("ban")[0];
	let son=ban.getElementsByClassName("son");
	let num=0;
	function fn(){
		num++;
		if (num==8){
			num=0;
		}
		for(let j=0;j<a.length;j++){
			a[j].style.zIndex=5;
			son[j].className="son";
		}
		a[num].style.zIndex=10;
		son[num].className="son hot";
	}
	for(let i=0;i<son.length;i++){
		son[i].onclick=function(){
			num=i-1;
			fn();
			clearInterval(t);
		}
	}
	b.onmouseenter=function(){
		clearInterval(t);
	}
	b.onmouseleave=function(){
		t=setInterval(fn,2000);
	}
	btns2.onclick=function(){
		fn();
		clearInterval(t);
	}
	function fu1(){
		num--;
		if (num<0){
			num=7;
		}
		for(let j=0;j<a.length;j++){
			a[j].style.zIndex=5;
		}
		a[num].style.zIndex=10;
	}
	btns1.onclick=function(){
		fu1();
		clearInterval(t);
	}
	
}