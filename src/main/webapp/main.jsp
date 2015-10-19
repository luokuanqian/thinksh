<%@page import="java.util.Date"%>
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<html xmlns=http://www.w3.org/1999/xhtml>
<head>
<%-- <script id="allmobilize" src="http://192.168.10.162:8080/think/js/ysp/adapter2.js?d=<%=new Date().getTime()%>"></script>
 --%>
<script id="allmobilize" src="http://192.168.43.198:8080/think/js/ysp/adapter2.js?d=<%=new Date().getTime()%>"></script>
<%@ include file="/public/meta.jsp"%>
<title>${webname}</title>
<script src="114.112.69.156:19295/cloudadapter/js/ysp/adapter.js?20150626"></script>
<script type="text/javascript">
</script>
</head>

<body>
 
<!--头部-->

	<!--头部-->
	<div class="header">
    	<div class="logo">
        	<div><a target="_blank" href="http://whaty.lms.webtrn.cn/cms/zpsy/index.htm">招聘信息</a> |  <a target="_blank" href="http://whaty.lms.webtrn.cn/cms/en/index.htm">English</a></div>
            <div class="ind_select">
           		<form name="searchFrm" action="/cms/whatycms/ArtiSearch.do">
           			<input type="hidden" name="searchParaKey" value="title"/>
            		<input type="text" name="searchParaValue" value="&nbsp;&nbsp;请输入关键字" onFocus="if (value =='&nbsp;&nbsp;请输入关键字'){value =''}" onBlur="if (value ==''){value='&nbsp;&nbsp;请输入关键字'}">
               		<input type="hidden" name="count" value="10"/>
               		<input type="hidden" name="chnlId" value="12989"/>
               		<div onclick="javascript:searchFrm.submit();" class="ind_select_btn"></div>
                </form>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="nav">
        	<ul class="nav_info">
	<li class="nav_off" state="off" onClick="window.location.href='/cms/main/index.htm'">首 页<span>∨</span></li>
	<li class="nav_off" state="off" onClick="window.location.href='/cms/gsjs/index.htm'">公司介绍<span>∨</span></li>
	<li class="nav_off" state="off" onClick="window.location.href='/cms/xwzx/index.htm'">新闻中心<span>∨</span></li>
	<li class="nav_off" state="off" onClick="window.location.href='/cms/cpjyxl/1/118964.htm'">产 品<span>∨</span></li>
	<li class="nav_off" state="off" onClick="window.location.href='/cms/fw/index.htm'">云服务<span>∨</span></li>
	<li class="nav_off" state="off" onClick="window.location.href='/cms/cgal/index.htm'">成功案例<span>∨</span></li>
	<li class="nav_off" state="off" onClick="window.location.href='/cms/xzzx/index.htm'">下载中心<span>∨</span></li>
	<li class="nav_off" state="off" onClick="window.location.href='/cms/lxwm/index.htm'">联系我们<span>∨</span></li>
</ul>        </div>
    </div>
    <!--头部-->
<script type="text/javascript">
	var browser=navigator.appName
	var b_version=navigator.appVersion
	var version=b_version.split(";");
	var trim_Version=version[1].replace(/[ ]/g,"");
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){
	/* 	alert("IE 6.0"); */
		/* window.location.href="/cms/ie/index.htm"; */
	}
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){	
	/* 	alert("IE 7.0"); */
	}
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0"){
	/* 	alert("IE 8.0"); */
	}
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0"){
	/* 	alert("IE 9.0"); */
	}
</script>
<!--头部-->
<div class="section" style="background: url(http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/bj_03.jpg) no-repeat bottom; background-attachment:fixed; ">
	<!--教育云服务-->
    <div class="column_info ind_jyyfw" id="ind_txt1">
    	<div onclick="window.location.href='/cms/fwitwb/index.htm'" style="cursor:pointer;height: 77px;width: 200px;"></div>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网梯公司结合国内远程教育、培训产业的需求，推出了教育云服务，以公司15年来的丰富产品资源和建设经验为依托，从传统的软件产品和技术提供商逐步转向互联网教育云服务运营商，为客户提供服务长期的技术解决方案和持续的运维服务。目前已经和国内200多家著名高校和培训单位开展了合作业务。</p>
<img src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_1/3_17/ioq5i7crelmp.png" style="cursor: pointer;"   >


    </div>
    <!--教育云服务-->
</div>
<div class="section" style="background: url(http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/bj_02.jpg) no-repeat bottom; background-attachment:fixed; ">
	<!--产品介绍-->
    <div class="column_info ind_cpjs" id="ind_txt2">
        <div class="ind_cpjs_scrolling">
        	<div onclick="window.location.href='/cms/cpjyxl/118964.htm'" style="cursor:pointer;height: 77px;width: 200px;margin-left: -160px;margin-top: -60px;margin-bottom: 20px;"></div>
            <img src="http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/scroll01.png" style="margin-top:10px;">
        </div>
      <div class="ind_cpjs_sidebar" style="margin-top:18px;">
<span class="ind_cpjs_sidebar_off ind_sidebar01 ind_cpjs_sidebar_on" val="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_1/1_17/b87ki50motcm.png" num="01" onclick="window.location.href='http://www.whaty.com/cms/cpjyxl/118964.htm'">远程教育平台</span>
<span class="ind_cpjs_sidebar_off ind_sidebar02" val="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_1/1_17/ptkai50mr5to.png" num="02" onclick="window.location.href='http://www.whaty.com/cms/cpjyxl/118965.htm'">远程培训平台</span>
<span class="ind_cpjs_sidebar_off ind_sidebar03" val="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_1/1_17/nj93i50mriqm.png" num="03" onclick="window.location.href='http://www.whaty.com/cms/cpjyxl/119105.htm'">成人教育平台</span>
<span class="ind_cpjs_sidebar_off ind_sidebar04" val="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_1/1_17/gq2ri50mrzl1.png" num="04" onclick="window.location.href='http://www.whaty.com/cms/cpjyxl/119114.htm'">移动学习解决方案</span>
<span class="ind_cpjs_sidebar_off ind_sidebar05" val="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_1/1_17/vc7ki50mskn2.png" num="05" onclick="window.location.href='http://www.whaty.com/cms/cpjyxl/119108.htm'">多媒体课件制作系统</span>
<span class="ind_cpjs_sidebar_off ind_sidebar06" val="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_1/1_17/n94ci50mti5u.png" num="06" onclick="window.location.href='http://www.whaty.com/cms/cpjyxl/119109.htm'">多媒体实时交互系统</span>
<span class="ind_cpjs_sidebar_off ind_sidebar07" val="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_1/1_17/sqxhi50mtzmy.png" num="07" onclick="window.location.href='http://www.whaty.com/cms/cpjyxl/119107.htm'">优E离线学习系统</span>
<span class="ind_cpjs_sidebar_off ind_sidebar08" val="http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/scroll08.png?id=2" num="08" onclick="window.location.href='/cms/cpjyxl/1/118964.htm'">其他</span>


            <div class="clear"></div>
        </div>
        <div class="clear"></div>
    </div>
    <!--产品介绍-->
</div>
<div class="section" style="background: url(http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/bj_04.jpg) no-repeat bottom; background-attachment:fixed; ">
	<!--公司荣誉-->
    <div class="column_info ind_gsry" id="ind_txt3">
    	<div onclick="window.location.href='/cms/gsjsgsry/index.htm'" style="cursor:pointer;height: 77px;width: 200px;"></div>
        <div class="ind_gsry_info">
            <ul>
<li onclick="window.location.href='/cms/gsjsgsry/index.htm'"class="gsry_left">国家现代远程教育相关奖项共获得<img src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2014_4/12_1/wos0i35oifca.jpg" width="40" height="40">次;</li>
<li onclick="window.location.href='/cms/gsjsgsry/index.htm'"class="gsry_right">国家重点新产品称号共获得<img src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2014_4/12_1/e9z2i35a9apf.jpg" width="40" height="40">次;</li>
<li onclick="window.location.href='/cms/gsjsgsry/index.htm'"class="gsry_left">北京市自主创新产品称号共获得<img src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2014_4/12_1/6rlfi35oltka.jpg" width="40" height="40">次;</li>
<li onclick="window.location.href='/cms/gsjsgsry/index.htm'"class="gsry_right">科技部亮点课题共获得<img src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2014_4/12_1/cid8i35a879o.jpg" width="40" height="40">次;</li>
<li onclick="window.location.href='/cms/gsjsgsry/index.htm'"class="gsry_left">北京科技进步奖共获得<img src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2014_4/12_1/b3ypi35omv7m.jpg" width="40" height="40">次;</li>
<li onclick="window.location.href='/cms/gsjsgsry/index.htm'"class="gsry_right">教育部科技进步奖共获得<img src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2014_4/12_1/u9roi35a65bi.jpg" width="40" height="40">次;</li>


                <div class="clear"></div>
            </ul>
		</div>
    </div>
    <!--公司荣誉-->
</div>
<div class="section" style="background: url(http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/bj_01.jpg)  no-repeat bottom; background-attachment:fixed; ">
	<!--网梯动态-->
    <div class="column_info ind_wtdt" id="ind_txt4">
    	<div onclick="window.location.href='/cms/xwzxwtdt/index.htm'" style="cursor:pointer;height: 77px;width: 200px;"></div>
        <div class="ind_wtdt_more"><a href="/cms/xwzxwtdt/index.htm">更多>></a></div>
        <div class="ind_wtdt_info">
<div class="ind_wtdt_info_txt">
	<img style="cursor: pointer;" src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_3/7_22/6jmnicet3b3s.png" onclick="window.location.href='http://www.whaty.com/cms/xwzxwtdt2015/126531.htm'" width="212" height="159"/>
	<h2>中西部部分高校互联网+教育发...</h2>
	<p style="height:160px">为了更好地服务中西部高校的战略发展，“中西部部分高校校长互联网+教育发展战略论坛”于2015年7月13日在北京新疆大厦顺利召开。会议由中国电子学会现代教育技术分会、教育部对口支援研究指导中心联合主办，北京网梯科技发展有限公司承办。</p>
	<span><a href="http://www.whaty.com/cms/xwzxwtdt2015/126531.htm">查看详情 >></a>2015/07/16</span>
</div>
<div class="ind_wtdt_info_txt">
	<img style="cursor: pointer;" src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_3/7_23/017wicfy80tr.png" onclick="window.location.href='http://www.whaty.com/cms/xwzxwtdt2015/126573.htm'" width="212" height="159"/>
	<h2>网梯协助筹办医学在线教育联盟...</h2>
	<p style="height:160px">2015年7月7日，由北京网梯科技发展有限公司协助筹办、北京大学医学网络教育学院等发起的医学在线教育联盟筹备会议，在北大医学部召开。会议邀请了国家卫计委医药卫生科技发展中心、现代远程教育试点高校、医学类院校、出版发行及技术咨询等16家单位。</p>
	<span><a href="http://www.whaty.com/cms/xwzxwtdt2015/126573.htm">查看详情 >></a>2015/07/08</span>
</div>
<div class="ind_wtdt_info_txt">
	<img style="cursor: pointer;" src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_2/6_5/rlkgiajb93jt.png" onclick="window.location.href='http://www.whaty.com/cms/xwzxwtdt2015/121304.htm'" width="212" height="159"/>
	<h2>总经理张震受邀前往北交大授课&nbsp;</h2>
	<p style="height:160px">5月28日下午，网梯总经理张震受邀前往北京交通大学远程与继续教育学院开展了题为“技术解析在线教育的发展与未来”的专题讲座，学院全体职工参与学习了此次讲座。学院反馈，这次讲座帮助他们对远程教育、在线教育的发展有了更深的启发和思考。 


</p>
	<span><a href="http://www.whaty.com/cms/xwzxwtdt2015/121304.htm">查看详情 >></a>2015/05/29</span>
</div>
<div class="ind_wtdt_info_txt">
	<img style="cursor: pointer;" src="http://www.whaty.com/cms/res_base/whaty/upload/article/image/2015_2/5_7/1ut8i9du02ym.jpg" onclick="window.location.href='http://www.whaty.com/cms/xwzxwtdt2015/121180.htm'" width="212" height="159"/>
	<h2>网梯受邀参加中国MOOC大会&nbsp;</h2>
	<p style="height:160px">2015年中国MOOC大会于4月27-28日在京盛大召开,大会以“MOOC引领中国未来教育新常态”为主题，参会人员主要来自全国高校的专家及老师，国内大中型企业的培训负责人。张震总经理受邀在“大学MOOC与未来大学高峰”论坛中发表了题为“技术解...</p>
	<span><a href="http://www.whaty.com/cms/xwzxwtdt2015/121180.htm">查看详情 >></a>2015/04/29</span>
</div>




            <div class="clear"></div>
		</div>
    </div>
    <!--网梯动态-->
</div>

<div class="section" style="background: url(http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/bj_02.jpg)  no-repeat bottom; background-attachment:fixed; ">
	<!--底部导航-->
    <div  id="ind_txt5">
	    <div class="column_info ind_dbdh">
	    	<div class="ind_dbdh_info">
	        	<div class="ind_dbdh_info_img dbdh_img01"><img src="http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/icon_03s.png"></div>
	            <h2>招聘信息</h2>
	            <p>网梯科技求贤若渴，欢迎有能之士，期待您的加入。</p><p><a href="http://whaty.lms.webtrn.cn/cms/zpsy/index.htm" target="_blank">查看更多></a></p>
	        </div>
	        <div class="ind_dbdh_info">
	       	  <div class="ind_dbdh_info_img dbdh_img02"><img src="http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/icon_03s.png"></div>
	            <h2>通过认证</h2>
	            <p style="cursor: pointer;" onclick="window.location.href='/cms/tgrz/119716.htm'" target="_blank">通过中国网络教育技术标准（CELTS）</p>
	            <p style="cursor: pointer;" onclick="window.location.href='/cms/tgrz/119717.htm'">通过ISO 9001:2000质量体系认证</p>
	        </div>
	        <div class="ind_dbdh_info">
	        	<div class="ind_dbdh_info_img dbdh_img03"><img src="http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/icon_03s.png"></div>
	            <h2>分支机构</h2>
	            <p>网络教育教学资源研发中心<br>上海网梯数码科技有限公司</p><p><a href="/cms/gsjsfzjg/index.htm" target="_blank">查看更多></a></p>
	        </div>
	        <div class="ind_dbdh_info" style="margin-right:0;">
	        	<div class="ind_dbdh_info_img dbdh_img04"><img src="http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/icon_03s.png"></div>
	            <h2>泛在终端</h2>
	            <p class="app_download">
		            <span onclick="window.location.href='http://software.webtrn.cn/cms/res_base/software_webtrn_cn/default/download/fzxx_new.apk'">Android下载</span>
		            <span onclick="window.location.href='http://itunes.apple.com/cn/app/ubiquitous-learning-center/id554119714?mt=8&uo=4'">iOS下载</span></p><p style="margin-left: 33px;"><a href="http://fanzai.webtrn.cn/" target="_blank">查看更多></a></p>
	        </div>
	    </div>
<div class="footerIndex">
   	<div class="partner">
       	<div class="partner_info">
           	<div class="partner_info_scroll">
               	<div style="height:80px;">
                </div>
            </div>
            <div class="QR">
               	<a href="#">　　手机访问本网站，请扫二维码</a>
   				<img src="http://www.whaty.com/cms/res_base/whaty/whaty2014/article/images/column05_22.jpg" width="120" height="118">
            </div>
            <div class="clear"></div>
        </div>
    </div>
  	<div class="copyright" style="font-size: 12px;">Copyright2015.　All Rights Reserved.　北京网梯科技发展有限公司   经营许可证编号：京ICP备08101962
</br>总部地址：北京市海淀区知春路甲48号盈都大厦C座4单元3B　电话：010-58731118　传真：010-58731017　E-mail:market@whaty.com</div>
</div>    </div>
    <!--底部导航-->
</div>
</body>
</html>