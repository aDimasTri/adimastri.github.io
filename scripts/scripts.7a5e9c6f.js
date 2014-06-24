(function(){"use strict";angular.module("clientApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angular-momentjs","angularMoment","angularCharts","ui","wu.masonry"]).config(["$routeProvider","$httpProvider",function(a,b){return b.defaults.useXDomain=!0,delete b.defaults.headers.common["X-Requested-With"],a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/about/:projectId",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/facts",{templateUrl:"views/facts.html",controller:"FactsCtrl"}).when("/wcloud",{templateUrl:"views/wcloud.html",controller:"WcloudCtrl"}).otherwise({redirectTo:"/"})}])}).call(this),function(){"use strict";angular.module("clientApp").controller("MainCtrl",["$scope","$location","$anchorScroll","globalService","homeService","stampService","socialAnalyticService","$moment","amMoment","$rootScope","anchorSmoothScroll",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s;return a.dataTable=[],a.myData=[],a.sticky="sticky",a.anyData=!1,a.activePage="Prabowo",a.notActivePage="Jokowi",a.trenLinkPr=[],a.limitLink=5,a.prabowoStats={},a.hattaStats={},a.jokowiStats={},a.jkStats={},a.radioModelPr="Prabowo",a.radioModelJk="Jokowi",a.praHattaStats=a.prabowoStats,a.jokoJkStats=a.jokowiStats,a.topPicPr=[],a.wordsJk=[],a.wordsPr=[],a.myOnClickFunction=function(){},a.myOnHoverFunction=function(){},a.wordswidth=200,a.wordsheigh=400,a.twitterIcon="icon/twitter.png",a.facebookIcon="icon/facebook.png",a.newsIcon="icon/news.png",a.tumblrIcon="icon/tumblr.png",a.pathIcon="icon/path.png",a.youtubeIcon="icon/youtube.png",a.googleplus="icon/googleplus.png",a.instagramIcon="icon/instagram.png",a.prabowoProfPic="icon/prabowo.png",a.hattaProfPic="icon/hatta.png",a.jokowiProfPic="icon/jokowi.jpeg",a.jkProfPic="icon/jk.jpeg",a.black="icon/black.png",a.toppeople="icon/toppeople.png",a.activatePage=function(b){return b!==a.activePage?(a.notActivePage=a.activePage,a.activePage=b,j.$broadcast("changePage")):void 0},a.switchStats=function(b){return"Prabowo"===a.activePage?(b!==a.radioModelPr&&(a.radioModelPr=b),a.praHattaStats="Prabowo"===b?a.prabowoStats:a.hattaStats):(b!==a.radioModelJk&&(a.radioModelJk=b),a.jokoJkStats="Jokowi"===b?a.jokowiStats:a.jkStats)},a.seeLink=function(){return a.limitLink=10===a.limitLink?5:10},b.hash("jumlahfollowerPr"),b.hash("hottweetsPr"),b.hash("jumlahtweetsPr"),b.hash("toplinksPr"),b.hash("toppeoplePr"),b.hash("hothashtagPr"),b.hash("topwordsPr"),b.hash("jumlahfollowerJk"),b.hash("hottweetsJk"),b.hash("jumlahtweetsJk"),b.hash("toplinksJk"),b.hash("toppeopleJk"),b.hash("hothashtagJk"),b.hash("topwordsJk"),b.hash("home"),a.jumpTo=function(b){return k.scrollTo("Prabowo"===a.activePage?b+"Pr":b+"Jk")},a.chartType="line",a.chartConfig={title:"",tooltips:!0,labels:!1,legend:{display:!1,position:"left"},colors:["#3399ff"],innerRadius:0,lineLegend:"lineEnd"},a.chartConfigJk={title:"",tooltips:!0,labels:!1,legend:{display:!1,position:"left"},colors:["#3399ff"],innerRadius:0,lineLegend:"lineEnd"},o=new Date,n=h(o),m=h(o.setDate(o.getDate()-5)),n=i.applyTimezone(n).format("YYYY-MM-DD"),m=i.applyTimezone(m).format("YYYY-MM-DD"),l=function(a){var b;return null==a||"object"!=typeof a?a:a instanceof Date?new Date(a.getTime()):(a instanceof RegExp&&(b="",null!=a.global&&(b+="g"),null!=a.ignoreCase&&(b+="i"),null!=a.multiline&&(b+="m"),null!=a.sticky&&(b+="y")),new RegExp(a.source,b))},r=function(){return e.get().then(function(){return function(b){var c,d,f,g,j,k,m,n,o,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb;for(b.length>0&&(a.anyData=!0),a.homeData=b,a.tweetPr=[],a.tweetJk=[],s=[],t=[],a.twitPersonPr={},a.twitPersonJk={},c=[],Y=b[0].topLinks,f=w=0,A=Y.length;A>w;f=w+=1){for(g=Y[f],null!=g.linkUrl?(k=g.linkUrl,u=k.match(/(?:https?:\/\/)?(?:www\.)?(.*?)\//),a.homeData[0].topLinks[f].urlDomain=u[u.length-1],a.homeData[0].topLinks[f].icon=q(a.homeData[0].topLinks[f].urlDomain)):c.push(f),null!=g.linkTitle?""===g.linkTitle&&(a.homeData[0].topLinks[f].linkTitle=a.homeData[0].topLinks[f].urlDomain):a.homeData[0].topLinks[f].linkTitle=a.homeData[0].topLinks[f].urlDomain,r=[],a.homeData[0].topLinks[f].graph={},Z=g.timeSeries,x=0,B=Z.length;B>x;x++)d=Z[x],r.push({x:d.timebucket,y:[d.count]});a.homeData[0].topLinks[f].graph.series=[""],r.length<=1&&r.push({x:r[0].x+1,y:r[0].y}),j=r.sort(function(a,b){return a.x-b.x}),a.homeData[0].topLinks[f].chartConfig=l(a.chartConfig),a.homeData[0].topLinks[f].graph.data=j,a.homeData[0].topLinks[f].chartConfig.colors=p(r)}for(y=0,K=c.length;K>y;y++)m=c[y],console.log(m),a.homeData[0].topLinks.splice(m,1);for(a.trenLinkPrs=a.homeData[0].topLinks,fb=b[0].hotTweets,f=z=0,L=fb.length;L>z;f=z+=1)g=fb[f],window.jsonpCallbackPr=function(b){return a.tweetPr.push(b.html)},e.getStatusTwitter(g.tweetId,"jsonpCallbackPr");for(c=[],a.topPeoplesPr=[],gb=b[0].topPeoples,d=S=0,M=gb.length;M>S;d=++S)g=gb[d],null!=g.profpicUrl&&a.topPeoplesPr.push(b[0].topPeoples[d]);for(hb=a.topPeoplesPr,f=T=0,N=hb.length;N>T;f=++T){for(g=hb[f],n=[],0!==f?(k=String(g.profpicUrl),a.topPeoplesPr[f].profpicUrl=k.replace(/_normal/,"_bigger")):(k=String(g.profpicUrl),a.topPeoplesPr[f].profpicUrl=k.replace(/_normal/,"")),a.topPeoplesPr[f].graph={},ib=g.timeSeries,U=0,O=ib.length;O>U;U+=1)d=ib[U],n.push({x:d.timebucket,y:[d.count]});n.length<=1&&n.push({x:n[0].x+1,y:n[0].y}),n=n.reverse(),a.topPeoplesPr[f].graph.series=[""],a.topPeoplesPr[f].graph.data=n,a.topPeoplesPr[f].graph.chartConfig=l(a.chartConfig),a.topPeoplesPr[f].graph.chartConfig.colors=p(n)}for(jb=b[0].numTweets,V=0,P=jb.length;P>V;V+=1)d=jb[V],v=i.preprocessDate(d.timebucket,""),o=h(v),s.push({x:i.applyTimezone(o).format("HH:mm"),y:[d.count]});for(a.twitPersonPr.series=[""],s.length>8&&(s=s.slice(0,7)),s=s.reverse(),a.twitPersonPr.data=s,kb=b[0].topWords,d=W=0,Q=kb.length;Q>W;d=W+=1)g=kb[d],a.wordsPr.push(g.word);for(lb=b[1].numTweets,X=0,R=lb.length;R>X;X+=1)d=lb[X],v=i.preprocessDate(d.timebucket,""),o=h(v),t.push({x:i.applyTimezone(o).format("HH:mm"),y:[d.count]});for(a.twitPersonJk.series=[""],t.length>7&&(t=t.slice(0,7)),t=t.reverse(),a.twitPersonJk.data=t,c=[],a.trenLinkJkw=[],mb=b[1].topLinks,d=ob=0,C=mb.length;C>ob;d=ob+=1)g=mb[d],null!=g.linkUrl&&a.trenLinkJkw.push(b[1].topLinks[d]);for($=a.trenLinkJkw,f=pb=0,D=$.length;D>pb;f=pb+=1){for(g=$[f],k=String(g.linkUrl),u=k.match(/(?:https?:\/\/)?(?:www\.)?(.*?)\//),a.trenLinkJkw[f].urlDomain=u[u.length-1],a.trenLinkJkw[f].icon=q(a.trenLinkJkw[f].urlDomain),null!=g.linkTitle?""===g.linkTitle&&(a.trenLinkJkw[f].linkTitle=a.trenLinkJkw[f].urlDomain):a.trenLinkJkw[f].linkTitle=a.trenLinkJkw[f].urlDomain,r=[],a.trenLinkJkw[f].graph={},_=g.timeSeries,qb=0,E=_.length;E>qb;qb++)d=_[qb],r.push({x:d.timebucket,y:[d.count]});a.trenLinkJkw[f].graph.series=[""],r.length<=1&&r.push({x:r[0].x+1,y:r[0].y}),j=r.sort(function(a,b){return a.x-b.x}),a.trenLinkJkw[f].chartConfig=l(a.chartConfig),a.trenLinkJkw[f].graph.data=j,a.trenLinkJkw[f].chartConfig.colors=p(r)}for(ab=b[1].topWords,d=rb=0,F=ab.length;F>rb;d=rb+=1)g=ab[d],a.wordsJk.push(g.word);for(c=[],a.topPeoplesJk=[],bb=b[1].topPeoples,d=sb=0,G=bb.length;G>sb;d=++sb)g=bb[d],null!=g.profpicUrl&&a.topPeoplesJk.push(b[1].topPeoples[d]);for(cb=a.topPeoplesJk,f=tb=0,H=cb.length;H>tb;f=++tb){for(g=cb[f],n=[],0!==f?(k=String(g.profpicUrl),a.topPeoplesJk[f].profpicUrl=k.replace(/_normal/,"_bigger")):(k=String(g.profpicUrl),a.topPeoplesJk[f].profpicUrl=k.replace(/_normal/,"")),a.topPeoplesJk[f].graph={},db=g.timeSeries,ub=0,I=db.length;I>ub;ub+=1)d=db[ub],n.push({x:d.timebucket,y:[d.count]});n.length<=1&&n.push({x:n[0].x+1,y:n[0].y}),n=n.reverse(),a.topPeoplesJk[f].graph.series=[""],a.topPeoplesJk[f].graph.data=n,a.topPeoplesJk[f].graph.chartConfig=l(a.chartConfig),a.topPeoplesJk[f].graph.chartConfig.colors=p(n)}for(eb=b[1].hotTweets,nb=[],f=vb=0,J=eb.length;J>vb;f=vb+=1)g=eb[f],window.jsonpCallbackJk=function(b){return a.tweetJk.push(b.html)},nb.push(e.getStatusTwitter(g.tweetId,"jsonpCallbackJk"));return nb}}(this))},s=function(){return g.getStats("156691421",m,n).then(function(){return function(b){var c,d,e,f,g,j;a.hattaStats=b,e=[],j=a.hattaStats.statistic;for(c in j)g=j[c],f=i.preprocessDate(c,""),d=h(f),e.push({x:i.applyTimezone(d).format("DD/MM"),y:[parseInt(g.followers_count)]});return a.hattaStats.graph={},a.hattaStats.graph.series=[""],a.hattaStats.graph.data=e}}(this)),g.getStats("40580714",m,n).then(function(){return function(b){var c,d,e,f,g,j;a.prabowoStats=b,e=[],j=a.prabowoStats.statistic;for(c in j)g=j[c],f=i.preprocessDate(c,""),d=h(f),e.push({x:i.applyTimezone(d).format("DD/MM"),y:[parseInt(g.followers_count)]});return a.prabowoStats.graph={},a.prabowoStats.graph.series=[""],a.prabowoStats.graph.data=e,a.praHattaStats=a.prabowoStats}}(this)),g.getStats("366987179",m,n).then(function(){return function(b){var c,d,e,f,g,j;a.jokowiStats=b,e=[],j=a.jokowiStats.statistic;for(c in j)g=j[c],f=i.preprocessDate(c,""),d=h(f),e.push({x:i.applyTimezone(d).format("DD/MM"),y:[parseInt(g.followers_count)]});return a.jokowiStats.graph={},a.jokowiStats.graph.series=[""],a.jokowiStats.graph.data=e,a.jokoJkStats=a.jokowiStats}}(this)),g.getStats("903172238",m,n).then(function(){return function(b){var c,d,e,f,g,j;a.jkStats=b,e=[],j=a.jkStats.statistic;for(c in j)g=j[c],f=i.preprocessDate(c,""),d=h(f),e.push({x:i.applyTimezone(d).format("DD/MM"),y:[parseInt(g.followers_count)]});return a.jkStats.graph={},a.jkStats.graph.series=[""],a.jkStats.graph.data=e}}(this))},q=function(b){var c;return c="",c=b.indexOf("twitter.co")>=0?a.twitterIcon:b.indexOf("facebook.co")>=0?a.facebookIcon:b.indexOf("youtube.co")>=0?a.youtubeIcon:b.indexOf("plus.google.co")>=0?a.googleplus:b.indexOf("path.co")>=0?a.pathIcon:b.indexOf("tumblr.co")>=0?a.tumblrIcon:b.indexOf("instagram.co")>=0?a.instagramIcon:a.newsIcon},p=function(a){var b;return b=[],b.push(a[a.length-1].y[0]>a[a.length-2].y[0]?"#32cd32":a[a.length-1].y[0]===a[a.length-2].y[0]?"#778899":"#ff4500"),b},r(),s()}])}.call(this),function(){"use strict";angular.module("clientApp").controller("AboutCtrl",["$scope","$location","$routeParams",function(a,b,c){return a.projectId=c.projectId}])}.call(this),function(){"use strict";var a;a=function(){function a(a,b){a.isActive=function(a){return a===b.path()?!0:void 0}}return a}(),angular.module("clientApp").controller("IndexCtrl",["$scope","$location",a])}.call(this),function(){"use strict";var a;a=function(){function a(a,b,c){var d;this.$log=a,this.candidatePromises=b,this.$scope=c,d=function(a){return function(){return a.candidatePromises.getPromises("jw").then(function(b){return a.jwPromises=b}),a.candidatePromises.getPromises("jk").then(function(b){return a.jkPromises=b}),a.candidatePromises.getPromises("ps").then(function(b){return a.psPromises=b}),a.candidatePromises.getPromises("hr").then(function(b){return a.hrPromises=b})}}(this),d(),this.$scope.sticky="sticky"}return a}(),angular.module("clientApp").controller("FactsCtrl",["$log","candidatePromises","$scope",a])}.call(this),function(){"use strict";angular.module("clientApp").service("candidatePromises",["$http","globalService",function(a,b){var c;return c=b.getCandidateUrl(),{get:function(){return a.get(c).then(function(a){return a.data})},getPromises:function(b){return a.get(""+c+"&id_calon="+b).then(function(a){return a.data})}}}])}.call(this),function(){"use strict";angular.module("clientApp").directive("barsChart",function(){return{restrict:"E",scope:{data:"="},link:function(a,b){var c,d,e,f;return f=400,e=200,c=d3.select(b[0]).append("svg:svg").attr("width","100%").attr("height",e+30).attr("class","chart"),a.$watch("data",function(a){return null!=a?(c.selectAll("*").remove(),d(a)):void 0}),window.onresize=function(){return a.$apply()},a.$watch(function(){return angular.element(window)[0].innerWidth},function(){return"undefined"!=typeof data&&null!==data?(c.selectAll("*").remove(),d(data)):void 0}),d=function(d){var g,h,i,j,k,l;return g=f/(d.length+1),k=d3.scale.linear().domain([0,d.length]).range([0,f]),l=d3.scale.linear().domain([0,d3.max(d)]).rangeRound([0,e]),j=d3.select(b[0])[0][0].offsetWidth-20,h=35*a.data.length,i=98,c.selectAll("rect").data(d).enter().append("svg:rect").attr("x",30).attr("y",function(a,b){return 35*b}).attr("height",30).attr("width",0).attr("fill","#192531").transition().duration(1e3).attr("width",function(a){return a+"%"}),c.selectAll("text").data(d).enter().append("svg:text").attr("fill","#fff").attr("y",function(a,b){return 35*b+22}).attr("x",35).text(function(a){return a}),c.selectAll("textX").data(d).enter().append("svg:text").attr("fill","#fff").attr("y",function(a,b){return 35*b+22}).attr("x",0).text(function(a,b){return 30*(b+1)})}}}}),angular.module("clientApp").directive("sticky",["$window",function(a){return{link:function(b,c,d){var e,f,g;return e=angular.element(a),void 0===b._stickyElements&&(b._stickyElements=[],e.bind("scroll.sticky",function(){var a,c,d,f;for(d=e.scrollTop(),a=0,f=[];a<b._stickyElements.length;)c=b._stickyElements[a],!c.isStuck&&d>c.start?(c.element.addClass("stuck"),c.isStuck=!0,c.placeholder&&(c.placeholder=angular.element("<div></div>").css({height:c.element.outerHeight()+"px"}).insertBefore(c.element))):c.isStuck&&d<c.start&&(c.element.removeClass("stuck"),c.isStuck=!1,c.placeholder&&(c.placeholder.remove(),c.placeholder=!0)),f.push(a++);return f}),g=function(){var a,c,d;for(a=0,d=[];a<b._stickyElements.length;)c=b._stickyElements[a],c.isStuck?c.placeholder&&(c.start=c.placeholder.offset().top):c.start=c.element.offset().top,d.push(a++);return d},e.bind("load",g),e.bind("resize",g)),f={element:c,isStuck:!1,placeholder:void 0!==d.usePlaceholder,start:c.offset().top},b._stickyElements.push(f)}}}])}.call(this),function(){"use strict";angular.module("clientApp").service("globalService",function(){var a,b,c,d,e;return c="http://54.254.146.99/",a="927d12ca61b653468f60316514f2bb9e",b="http://api.pemiluapi.org/calonpresiden/api/promises?apiKey="+a,d="http://api.pemiluapi.org/stamps/api/stamps?apiKey="+a,e="http://api.pemiluapi.org/socmedpemilu?apiKey="+a+"&r=user/statistic",{getServerBaseUrl:function(){return c},getAppKey:function(){return a},getCandidateUrl:function(){return b},getStampUrl:function(){return d},getStatsTwitUrl:function(){return e}}})}.call(this),function(){"use strict";var a;a=function(){function a(a,b,c){this.$q=a,this.$log=b,this.$http=c}var b,c;return c="http://54.254.146.99/home",b="https://api.twitter.com/1/statuses/oembed.json",a.prototype.get=function(){return this.$http.get(c).then(function(a){return a.data})},a.prototype.getData=function(a){return this.$http.get(""+c+"&id_calon="+a).then(function(a){return a.data})},a.prototype.getStatusTwitter=function(a,c){var d;return d=this.$q.defer(),this.$http.jsonp(""+b+"?id="+a+"&callback="+c),d.promise},a}(),angular.module("clientApp").service("homeService",["$q","$log","$http","globalService",a])}.call(this),function(){"use strict";angular.module("clientApp").service("stampService",["$http","globalService",function(a,b){var c;return c=b.getStampUrl(),{get:function(){return a.get(c).then(function(a){return a.data})},getStamp:function(b){return a.get(""+c+"&tags="+b).then(function(a){return a.data})}}}])}.call(this),function(){"use strict";angular.module("clientApp").service("socialAnalyticService",["$http","globalService",function(a,b){var c;return c=b.getStatsTwitUrl(),{get:function(){return a.get(c).then(function(a){return a.data})},getStats:function(b,d,e){return a.get(""+c+"&user_id="+b+"&start_date="+d+"&end_date="+e).then(function(a){return a.data})}}}])}.call(this),angular.module("clientApp").service("anchorSmoothScroll",function(){this.scrollTo=function(a){function b(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function c(a){for(var b=document.getElementById(a),c=b.offsetTop,d=b;d.offsetParent&&d.offsetParent!=document.body;)d=d.offsetParent,c+=d.offsetTop;return c}var d=b(),e=c(a),f=e>d?e-d:d-e;if(100>f)return void scrollTo(0,e);var g=Math.round(f/100);g>=20&&(g=20);var h=Math.round(f/25),i=e>d?d+h:d-h,j=0;if(e>d)for(var k=d;e>k;k+=h)setTimeout("window.scrollTo(0, "+i+")",j*g),i+=h,i>e&&(i=e),j++;else for(var k=d;k>e;k-=h)setTimeout("window.scrollTo(0, "+i+")",j*g),i-=h,e>i&&(i=e),j++}}),function(){"use strict";angular.module("clientApp").filter("cutWord",function(){return function(a,b,c,d){var e;return a?(c=parseInt(c,10))?a.length<=c?a:(a=a.substr(0,c),b&&(e=a.lastIndexOf(" "),-1!==e&&(a=a.substr(0,e))),a+(d||" …")):a:""}})}.call(this),function(){"use strict";angular.module("clientApp").filter("repeatRange",function(){return function(a,b,c){return(a||[]).slice(b,c)}})}.call(this),function(){"use strict";angular.module("clientApp").controller("WcloudCtrl",["$scope",function(a){return a.words=[{word:"Dimas",size:4},{word:"Joko",size:3},{word:"Bambang",size:2},{word:"Bambang",size:5}],a.type="cloud",a.sort="asc"}])}.call(this);