package org.example;

import com.sun.source.tree.LambdaExpressionTree;

import java.awt.print.Book;
import java.util.ArrayList;

public class User {
    private int idUser;
    private String name;
    private String phoneNumber;
    private String email;
    private String password;
    private static int nextIdUser = 1;
    ArrayList<Booking> bookingList = new ArrayList<>();

    public User(String name, String phoneNumber, String email, String password) {
        this.idUser = nextIdUser++;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
    // Method to display user information.
    public void userInfo(){
        System.out.println("User: " + getIdUser() + "," + getName() + "," + getPhoneNumber() + "," + getPassword());
    }
    // Method to book a session
    public void bookSession(int sessionId){
        Booking newBook = new Booking(sessionId,getIdUser()); // create new booking
        bookingList.add(newBook);  // add booking in arrayList for testing to save booking, waiting for implementation databasen in the program
        // show info if booking is successfully
        System.out.println("User: " + getName() + " with id " + getIdUser() + " Book to session with id " + sessionId);
    }
    public void cancelBooking(int bookingId){
        // Iterate through the list Booking to find the booking for cancel
        for(Booking booking : bookingList){
            if(booking.getBookingId() == bookingId){
                bookingList.remove(bookingId); // Remove booking
                System.out.println("Booking canceled  with id " + bookingId);
                return;
            }
        }
    }
    // Method to view user's bookings
    public ArrayList<Booking> viewBookings (){
        // Create a temporary Arraylist tempBookingList to store booking that we find in the user's Booking list
        ArrayList<Booking> tempBookingList  = new ArrayList<>();
        for(Booking booking : bookingList){
            if(booking != null){
                tempBookingList.add(booking);
            }
        }
        return null;
    }
    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
