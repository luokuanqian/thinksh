<link rel="icon" type="image/png" href="assets/i/favicon.png">
<link rel="icon" sizes="192x192" href="assets/i/app-icon72x72@2x.png">
<link rel="apple-touch-icon-precomposed" href="assets/i/app-icon72x72@2x.png">
<c:choose>
	<c:when test="${isAmazeui ==false"}>
	</c:when>
	<c:otherwise>
		<link rel="stylesheet" href="${ctx}/js/amazeui/css/amazeui.min.css">
		<link rel="stylesheet" href="${ctx}/js/amazeui/css/app.css">
	</c:otherwise>
</c:choose>
