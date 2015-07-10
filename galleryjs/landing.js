// JavaScript Document

function di(id,name){
	if (document.images) document.images[id].src=eval(name+".src"); 
}

	function getWinDim() {
		if (parseInt(navigator.appVersion)>3) {
			if (navigator.appName=="Netscape") {
				winW = window.innerWidth;
				winH = window.innerHeight;
			}
			if (navigator.appName.indexOf("Microsoft")!=-1) {
				winW = document.body.offsetWidth;
				winH = document.body.offsetHeight;
			}
		}
		
		return [winH,winW];
	}
	
	/////////////////////////////////////////////////
	/*
	function checkWidth(obj) {
		var steps = 10;
		var defaultSize = 250;
		var thisObj = document.getElementById(obj);
		var currentDim = getWinDim();
		var currentW = currentDim[1];
		for(i=2;i<steps;i++) {
			if(currentW > (defaultSize*2)) {
				if(currentW < (i*defaultSize)) {
					thisObj.style.width = ((i-1)*defaultSize) + 'px';
					break;
				}
			} else thisObj.style.width = (defaultSize*2) + 'px';
		}
	}
	*/
	/////////////////////////////////////////////////
	function checkWidth(obj) {
		var thisObj = document.getElementById(obj);
		var currentDim = getWinDim();
		var currentW = currentDim[1];
		
		thisObj.style.width = (currentW) + 'px';
	}
	/////////////////////////////////////////////////
	function checkHeight(obj) {
		var thisObj = document.getElementById(obj);
		var currentDim = getWinDim();
		var currentH = currentDim[0];
		
		thisObj.style.height = (currentH-40) + 'px';
	}
	
	function gotoPage(page) {
		document.location.href=page;
	}

	function confirmEntryRemoval(pid,thispage) {
		var agree=confirm("Delete entry? (this is permanent)");
		if (agree) document.location.href="../personal/entry-process.php?action=remove&pid=" + pid + "&returnpage=" + thispage;
		else return false ;
	}
	
	function changeGen(val) {
		if(val != 'all') document.location.href="/timecapsules/generation"+val;
		else document.location.href="/timecapsules";
	}
	
	function swapText(element,val,col,txtReplace,colReplace) {
		stripval = stripslashes(val);
		
		if(element.value == val) {
			if(txtReplace != '' && txtReplace != 'link') element.value = txtReplace;
			else element.value = "";
			element.style.color="#000";
			element.style.background="#ffffcc";
			//alert(element+' / '+val+' / '+col+' / '+txtReplace);
		} else if (element.value == "") {
			element.value = stripval;
			element.style.color=col;
			if(colReplace) element.style.background=colReplace;
			else element.style.background="#ffffff";
			//
			if(element.value == "Title") element.style.color = "#999999";
			
		} else if(txtReplace == "link") {
			element.style.color="#333";
		} else {
			element.style.color="#333";
			element.style.background="#ffffff";
		}
	}
	
	function stripslashes(str) {
		str=str.replace(/\\'/g,'\'');
		str=str.replace(/\\"/g,'"');
		str=str.replace(/\\\\/g,'\\');
		str=str.replace(/\\0/g,'\0');
		return str;
	}
	
	function addslashes(str) {
		str=str.replace(/\'/g,'\\\'');
		str=str.replace(/\"/g,'\\"');
		str=str.replace(/\\/g,'\\\\');
		str=str.replace(/\0/g,'\\0');
		return str;
	}
/////////////////////////////////////////////////////////////////////////////////////////////////
function changeVisibility(prid,visibility) {
	var agree=confirm("Make this project "+visibility+"?");
	if (agree) {
		visXMLHttpObj=getXMLHttpRequestObject();
		visXMLHttpObj.open("POST","projects/visibilty-process.php",true);
		visXMLHttpObj.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		visXMLHttpObj.send("prid="+prid+"&visibility="+visibility);
			
		var vis = document.getElementById('visible');
		var invis = document.getElementById('invisible');
		if(visibility == 'visible') {
			vis.setAttribute('src','_gfx/switch_visible_on.gif');
			invis.setAttribute('src','_gfx/switch_invisible_off.gif');
		} else {
			vis.setAttribute('src','_gfx/switch_visible_off.gif');
			invis.setAttribute('src','_gfx/switch_invisible_on.gif');
		}
		document.getElementById('vis_status').style.visibility = 'visible';
		setTimeout("document.getElementById('vis_status').style.visibility = 'hidden';",1000);
		
	}
}	
/////////////////////////////////////////////////////////////////////////////////////////////////
	// top navigation //
	nav_homepage=new Image()
 	nav_homepage.src="../_gfx/nav_home_out.gif"
 	nav_homepage_o=new Image()
 	nav_homepage_o.src="../_gfx/nav_home_over.gif"
	
	nav_recent=new Image()
 	nav_recent.src="../_gfx/nav_recent_out.gif"
 	nav_recent_o=new Image()
 	nav_recent_o.src="../_gfx/nav_recent_over.gif"
	
	nav_projects=new Image()
 	nav_projects.src="../_gfx/nav_projects_out.gif"
 	nav_projects_o=new Image()
 	nav_projects_o.src="../_gfx/nav_projects_over.gif"
	
	nav_timecapsules=new Image()
 	nav_timecapsules.src="../_gfx/nav_time_out.gif"
 	nav_timecapsules_o=new Image()
 	nav_timecapsules_o.src="../_gfx/nav_time_over.gif"
	
	nav_blog=new Image()
 	nav_blog.src="../_gfx/nav_blog_out.gif"
 	nav_blog_o=new Image()
 	nav_blog_o.src="../_gfx/nav_blog_over.gif"
	
	
	// arrows //
	pg_prev_usr=new Image()
 	pg_prev_usr.src="../_gfx/btn_gallery_page_prev.gif"
	pg_prev_usr_over=new Image()
 	pg_prev_usr_over.src="../_gfx/btn_gallery_page_prev_o.gif"
	
	pg_next_usr=new Image()
 	pg_next_usr.src="../_gfx/btn_gallery_page_next.gif"
	pg_next_usr_over=new Image()
 	pg_next_usr_over.src="../_gfx/btn_gallery_page_next_o.gif"
	
	
	// add post to project close //
	add_pr=new Image()
	add_pr.src="../_gfx/btn_addtoproject.gif"
	add_pr_o=new Image()
	add_pr_o.src="../_gfx/btn_addtoproject_o.gif"