<script src="${ctx}/js/jquery/core/jquery-2.1.1.min.js"></script>
<c:if test="isAmazeui ==null || #attr.isAmazeui ==true">
	<script src="${ctx}/js/amazeui/js/amazeui.min.js"></script>
</c:if>
<script>
	$.ajaxSetup({
		cache : false
	});
</script>
