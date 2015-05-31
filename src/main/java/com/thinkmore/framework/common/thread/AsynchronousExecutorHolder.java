package com.thinkmore.framework.common.thread;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import javax.annotation.PreDestroy;

public class AsynchronousExecutorHolder {
	private ExecutorService executorService;
	private ExecutorService futureExecutorService;

	public AsynchronousExecutorHolder() {
		this(100);
	}

	public AsynchronousExecutorHolder(int threadCount) {
		this.executorService = Executors.newFixedThreadPool(threadCount);
		this.futureExecutorService = Executors.newFixedThreadPool(threadCount);
	}

	public void execute(Runnable runnable) {
		final Future future = this.executorService.submit(runnable);
		this.futureExecutorService.execute(new Runnable() {
			public void run() {
				try {
					future.get(2L, TimeUnit.SECONDS);
				} catch (InterruptedException e) {
					e.printStackTrace();
				} catch (ExecutionException e) {
					e.printStackTrace();
				} catch (TimeoutException e) {
					e.printStackTrace();
					future.cancel(true);
				}
			}
		});
	}

	public <T> void execute(Callable<T> callable, final AsynchronousResultHandler<T> asynchronousReturnHandler) {
		final Future future = this.executorService.submit(callable);
		this.futureExecutorService.execute(new Runnable() {
			public void run() {
				try {
					asynchronousReturnHandler.onReturn((T) future.get(2L, TimeUnit.SECONDS));
				} catch (InterruptedException e) {
					e.printStackTrace();
				} catch (ExecutionException e) {
					e.printStackTrace();
					asynchronousReturnHandler.onException(e);
				} catch (TimeoutException e) {
					e.printStackTrace();
					future.cancel(true);
				}
			}
		});
	}

	@PreDestroy
	public void close() {
		this.executorService.shutdownNow();
		this.futureExecutorService.shutdown();
	}

	public String toStatisticString() {
		ThreadPoolExecutor threadPoolExecutor = (ThreadPoolExecutor) (ThreadPoolExecutor) this.executorService;
		StringBuilder sb = new StringBuilder();
		sb.append("executorService:");
		sb.append("poolSize-").append(threadPoolExecutor.getPoolSize());
		sb.append("completedTaskCount-").append(threadPoolExecutor.getCompletedTaskCount());
		sb.append("activeCount-").append(threadPoolExecutor.getCompletedTaskCount());
		sb.append("largestPoolSize-").append(threadPoolExecutor.getLargestPoolSize());
		return sb.toString();
	}
}
