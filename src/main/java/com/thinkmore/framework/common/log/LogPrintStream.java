package com.thinkmore.framework.common.log;
import java.io.OutputStream;
import java.io.PrintStream;
import java.util.Locale;
import org.slf4j.Logger;
/**
 * 重定向system.out到日志文件
 * 
 * @author tudou
 *
 */
public class LogPrintStream extends PrintStream {
	private Logger log = LogUtil.getLogger("SystemOut");
	private static PrintStream instance = new LogPrintStream(System.out);

	private LogPrintStream(OutputStream out) {
		super(out);
	}

	public static void redirectSystemOut() {
		System.setOut(instance);
	}

	public PrintStream append(char c) {
		return this;
	}

	public PrintStream append(CharSequence csq, int start, int end) {
		return this;
	}

	public PrintStream append(CharSequence csq) {
		return this;
	}

	public boolean checkError() {
		return false;
	}

	protected void clearError() {
	}

	public void close() {
	}

	public void flush() {
	}

	public PrintStream format(Locale l, String format, Object args) {
		return this;
	}

	public PrintStream format(String format, Object args) {
		return this;
	}

	public void print(boolean b) {
		println(b);
	}

	public void print(char c) {
		println(c);
	}

	public void print(char[] s) {
		println(s);
	}

	public void print(double d) {
		println(d);
	}

	public void print(float f) {
		println(f);
	}

	public void print(int i) {
		println(i);
	}

	public void print(long l) {
		println(l);
	}

	public void print(Object obj) {
		println(obj);
	}

	public void print(String s) {
		println(s);
	}

	public PrintStream printf(Locale l, String format, Object args) {
		return this;
	}

	public PrintStream printf(String format, Object args) {
		return this;
	}

	public void println(Object x) {
		if (x != null) {
			this.log.debug(String.valueOf(x));
		}
	}

	public void println(String x) {
		this.log.debug(x);
	}
}