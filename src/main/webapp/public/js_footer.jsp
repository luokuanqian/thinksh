<script src="${ctx}/js/jquery/core/jquery-2.1.1.min.js"></script>
<s:if test='#attr.isAmazeui ==null || #attr.isAmazeui =="true"'>
	<script src="${ctx}/js/amazeui/js/amazeui.min.js"></script>
</s:if>
<script>
$.ajaxSetup({cache : false});
</script>
