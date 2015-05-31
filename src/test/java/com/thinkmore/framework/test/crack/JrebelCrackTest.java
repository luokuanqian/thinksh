package com.thinkmore.framework.test.crack;

import javassist.ClassPool;
import javassist.CtClass;
import javassist.CtMethod;
public class JrebelCrackTest {

	public static void main(String[] args) {
		try {
			// 这个是得到反编译的池
			ClassPool pool = ClassPool.getDefault();
			// 取得需要反编译的jar文件，设定路径
			pool.insertClassPath("D:\\Java\\myplugins\\jrebel-5.6.0-nosetup\\jrebel\\jrebel.jar");
			// 取得需要反编译修改的文件，注意是完整路径
			CtClass cc1 = pool.get("com.zeroturnaround.javarebel.tL");
			// 取得需要修改的方法
			CtMethod[] methods = cc1.getDeclaredMethods();
			for (CtMethod m : methods) {
				System.out.println(m.getName());
				if("a".equals(m.getName())){
					CtClass cts[]=m.getParameterTypes();
					for (CtClass ctClass : cts) {
						System.out.println(ctClass.getName());
					}
				}
			}
			// 插入修改项，我们让他直接返回(注意：根据方法的具体返回值返回，因为这个方法返回值是void，所以直接return；)
			//method.insertBefore("{if(0!=1) return true;}");
			// 写入保存
			//cc1.writeFile();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
