<ul class="deskIcon currDesktop">
    <% for(var i=0;i<lnks.length;i++){ %>
    <li class="desktop_icon" id="<%=lnks[i].id%>" data='{title:"<%=lnks[i].title%>",url:"<%=lnks[i].url%>",winWidth:<%=lnks[i].width%>,winHeight:<%=lnks[i].height%>}'><span class="icon"><img src="<%=lnks[i].img%>"/></span><div class="text"><%=lnks[i].text%><s></s></div></li>
    <%} %>
     <li class="desktop_icon add_icon"><span class="icon"><img src="static/images/add_icon.png"/></span><div class="text">添加<s></s></div></li>
</ul>
<ul class="deskIcon">

</ul>