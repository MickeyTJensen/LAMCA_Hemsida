package org.example;

import java.awt.print.Book;
import java.time.LocalDateTime;
import java.util.ArrayList;

public class Main {
    User user;
    public static void main(String[] args) {
        System.out.println("Hello");
        run();
    }
    public static void run(){
        ArrayList<User> usersList = new ArrayList<>();
        usersList.add(new User("Chung","0431161015","chung@gmail.com","chung1234"));
        usersList.add(new User("Arta","043102030","arta@gmail.com","arta1234"));
        usersList.add(new User("Lars","0431405060","lars@gmail.com","lars1234"));
        usersList.add(new User("Anders","0431161015","anders@gmail.com","anders1234"));
        usersList.add(new User("Mickey","0431161015","mickey@gmail.com","mickey1234"));

        User user2 = usersList.get(2);

    }


}
