package com.thinkmore.framework.common.spring;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;

/**
 * 将所有名称以Action结尾的bean的scope默认设置为PROTOTYPE
 * 1、如果已经设置过scope，则以设置过的为准 
 * 2、防止有人漏写，也不用写
 * @author lizhuang
 * @date 2015.06.18
 */
public class MyBeanFactoryPostProcessor implements BeanFactoryPostProcessor {

	@Override
	public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
		String[] beanNames = beanFactory.getBeanDefinitionNames();
		for (String beanName : beanNames) {
			BeanDefinition bd = beanFactory.getBeanDefinition(beanName);
			String beanClassName = bd.getBeanClassName();
			if (beanClassName != null && beanClassName.endsWith("Action")) {
				String scope = bd.getScope();
				if (BeanDefinition.SCOPE_SINGLETON.equals(scope) || StringUtils.isBlank(scope)) {
					bd.setScope(BeanDefinition.SCOPE_PROTOTYPE);
				}
			}
		}
	}
}
