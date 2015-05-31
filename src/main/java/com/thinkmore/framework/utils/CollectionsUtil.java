package com.thinkmore.framework.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

/**
 * @desc: jdk1.5加入范型后，每每创建集合都倍受折磨，声明的时候要标注范型，
 *        创建的时候也要标注范型，实在是一件让人恼火的事儿，受《Effective Java》启发，利用范型的特性，
 *        为每种集合类提供一个静态工厂方法( 不同于设计模式中的静态工厂方法模式)就可以避免重复书写范型。
 * @author:lizhuang
 * @createTime:2013-6-30
 */
public class CollectionsUtil {
	/**
	 * HashMap静态工厂方法
	 * 
	 * @return
	 */
	public static <K, V> HashMap<K, V> newHashMap() {
		return new HashMap<K, V>();
	}

	/**
	 * Hashtable静态工厂方法
	 * 
	 * @return
	 */
	public static <K, V> Hashtable<K, V> newHashtable() {
		return new Hashtable<K, V>();
	}

	/**
	 * TreeMap静态工厂方法
	 * 
	 * @return
	 */
	public static <K, V> TreeMap<K, V> newTreeMap() {
		return new TreeMap<K, V>();
	}

	/**
	 * LinkedHashMap静态工厂方法
	 * 
	 * @return
	 */
	public static <K, V> LinkedHashMap<K, V> newLinkedHashMap() {
		return new LinkedHashMap<K, V>();
	}

	/**
	 * ArrayList静态工厂方法
	 * 
	 * @return
	 */
	public static <T> ArrayList<T> newArrayList() {
		return new ArrayList<T>();
	}

	/**
	 * LinkedList静态工厂方法
	 * 
	 * @return
	 */
	public static <T> LinkedList<T> newLinkedList() {
		return new LinkedList<T>();
	}

	/**
	 * HashSet静态工厂方法
	 * 
	 * @return
	 */
	public static <T> HashSet<T> newHashSet() {
		return new HashSet<T>();
	}

	/**
	 * LinkedHashSet静态工厂方法
	 * 
	 * @return
	 */
	public static <T> LinkedHashSet<T> newLinkedHashSet() {
		return new LinkedHashSet<T>();
	}

	/**
	 * TreeSet静态工厂方法
	 * 
	 * @return
	 */
	public static <T> TreeSet<T> newTreeSet() {
		return new TreeSet<T>();
	}

	/**
	 * 为每个静态工厂方法提供示例
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		// ArrayList静态工厂方法示例
		List<String> arrayList = CollectionsUtil.newArrayList();
		arrayList.add("a");
		arrayList.add("b");

		// HashMap静态工厂方法示例
		Map<String, List<String>> hashMap = CollectionsUtil.newHashMap();
		hashMap.put("letters", arrayList);

		// Hashtable静态工厂方法示例
		Map<String, List<String>> hashtable = CollectionsUtil.newHashtable();
		hashtable.put("letters", arrayList);

		// TreeMap静态工厂方法示例
		Map<String, List<String>> treeMap = CollectionsUtil.newTreeMap();
		treeMap.put("letters", arrayList);

		// LinkedHashMap静态工厂方法示例
		Map<String, List<String>> linkedHashMap = CollectionsUtil.newLinkedHashMap();
		linkedHashMap.put("letters", arrayList);

		// LindedList静态工厂方法示例
		List<List<String>> linkedList = CollectionsUtil.newLinkedList();
		linkedList.add(arrayList);

		// HashSet静态工厂方法示例
		Set<List<String>> hashSet = CollectionsUtil.newHashSet();
		hashSet.add(arrayList);

		// LindedHashSet静态工厂方法示例
		Set<List<String>> linkedHashSet = CollectionsUtil.newLinkedHashSet();
		linkedHashSet.add(arrayList);

		// TreeSet静态工厂方法示例
		Set<List<String>> treeSet = CollectionsUtil.newTreeSet();
		treeSet.add(arrayList);
	}
}
