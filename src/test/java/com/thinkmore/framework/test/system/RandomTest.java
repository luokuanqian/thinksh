package com.thinkmore.framework.test.system;

import org.apache.commons.lang3.RandomUtils;

/**
 * @desc:
 * @author:lizhuang
 * @createTime:2013-7-17
 */
public class RandomTest {
	public static void main(String[] args) {
		for (int i = 0; i < 100; i++) {
			System.out.println(RandomUtils.nextInt(0, 99999));
		}
	}
}
