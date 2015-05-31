<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script src="${request.contextPath}/js/jquery/core/jquery-1.8.3.min.js"></script>
<script src="${request.contextPath}/js/jquery/cxSelect/jquery.cxselect.min.js"></script>
<title>Insert title here</title>
<script type="text/javascript">
	//selects 为数组形式，请注意顺序 
	$('#element_id').cxSelect({
		selects : [ 'province', 'city', 'area' ],
		nodata : 'none'
	});

	$.cxSelect.defaults.url = '${request.contextPath}/js/jquery/cxSelect/cityData.min.json'; // 提示：如果服务器不支持 .json 类型文件，请将文件改为 .js 文件
	$.cxSelect.defaults.nodata = 'none';
</script>
</head>
<body>
	<div id="element_id">
		<select class="province"></select> <select class="city"></select> <select class="area"></select>
	</div>
</body>
</html>