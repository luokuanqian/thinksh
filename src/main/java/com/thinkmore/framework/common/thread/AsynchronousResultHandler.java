package com.thinkmore.framework.common.thread;

public abstract interface AsynchronousResultHandler<T>
{
  public abstract void onReturn(T paramT);

  public abstract void onException(Exception paramException);
}
