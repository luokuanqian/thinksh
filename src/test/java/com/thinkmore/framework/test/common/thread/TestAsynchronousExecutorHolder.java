package com.thinkmore.framework.test.common.thread;
import java.text.SimpleDateFormat;
import java.util.Date;
import com.thinkmore.framework.common.thread.AsynchronousExecutorHolder;
/**
 * @Desc:测试异处数据处理
 * @author:tudou
 * @createTime:2014年9月3日
 */
public class TestAsynchronousExecutorHolder {
	private String userDao="userDao或者userService";
	
	public static void main(String[] args) {
		TestAsynchronousExecutorHolder test=new TestAsynchronousExecutorHolder();
		test.saveLog("user1","deleteUser","127.0.0.1");
		test.saveLog("user2","saveUser","127.0.0.2");
		test.saveLog("user3","updateUser","127.0.0.3");
	}
	
	public void saveLog(final String username,final String action,final String ip){
		AsynchronousExecutorHolder asynchronousExecutorHolder = new AsynchronousExecutorHolder();
		asynchronousExecutorHolder.execute(new Runnable() {
			public void run() {
				try {
					SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
					String now=sdf.format(new Date());
					Thread.sleep(1 * 1000);
					System.out.println("IP为:"+ip+"的用户："+username+"在"+now+"时，操作了"+action);
					System.out.println("模拟真实情况将日志存进数据库中。"+userDao);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		});
	}
}
