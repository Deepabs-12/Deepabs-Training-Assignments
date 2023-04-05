import java.util.concurrent.*;
public class excecutorServiceExample {
	   public static void main(String[] args) {
		   ExecutorService executorService = Executors.newFixedThreadPool(10);
		   executorService.execute(new Runnable(){
		  
		    public void run(){
		    System.out.println("ExecutorService");
		   }
		 });
		  executorService.shutdown();
		    }
		  }


