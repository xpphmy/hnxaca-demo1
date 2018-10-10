var NewTapspans=document.getElementsByClassName("NewTap")[0].getElementsByTagName("span");
var taps=document.getElementsByClassName("taps");
	function Show(a){
		fn_clean();
		NewTapspans[a].id="point";
		taps[a].id="TapShow";
	}
	function fn_clean(){
		NewTapspans[0].id="";
		taps[0].id="";
		NewTapspans[1].id="";
		taps[1].id="";
		NewTapspans[2].id="";
		taps[2].id="";
		NewTapspans[3].id="";
		taps[3].id="";
		NewTapspans[4].id="";
		taps[4].id="";
	}