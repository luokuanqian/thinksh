package com.thinkmore.framework.utils;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

public class ClassUtils {
	// 从一个包中查找出所有类,在jar包中不能查找
	public static List<Class> getClassesByPackageName(String packageName){
		ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
		String path = packageName.replace('.', '/');
		Enumeration<URL> resources;
		ArrayList<Class> classes = new ArrayList<Class>();
		try {
			resources = classLoader.getResources(path);
			List<File> dirs = new ArrayList<File>();
			while (resources.hasMoreElements()) {
				URL resource = resources.nextElement();
				dirs.add(new File(resource.getFile()));
			}
			for (File directory : dirs) {
				classes.addAll(findClasses(directory, packageName));
			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return classes;
	}

	public static List<Class> findClasses(File directory, String packageName) throws ClassNotFoundException {
		List<Class> classes = new ArrayList<Class>();
		if (!directory.exists()) {
			return classes;
		}
		File[] files = directory.listFiles();
		for (File file : files) {
			if (file.isDirectory()) {
				// 递归查找文件夹下面的所有文件
				assert !file.getName().contains(".");
				classes.addAll(findClasses(file, packageName + '.' + file.getName()));
			} else if (file.getName().endsWith(".class")) {
				classes.add(Class.forName(packageName + "." + file.getName().substring(0, file.getName().length() - 6)));
			}
		}
		return classes;
	}
}
