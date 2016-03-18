<ul class="deskIcon currDesktop">
    <% for(var i=0;i<lnks.length;i++){ console.log(lnks.length+"============");%>

    <li class="desktop_icon" id="<%=lnks[i].id%>" data="{title:"<%=lnks[i].title%>",url:"<%=lnks[i].url%>",winWidth:<%=lnks[i].width%>,winHeight:<%=lnks[i].height%>}"><span class="icon"><img src="<%=lnks[i].img%>"/></span><div class="text"><%=lnks[i].text%><s></s></div></li>

    <%} %>
</ul>
<ul class="deskIcon">

</ul>