package org.example;

import java.time.LocalDateTime;

public class Booking {
    private int bookingId;
    private int userId;
    private int sessionId;
    private LocalDateTime bookingTime;
    private boolean confirmed;
    private static int nextIdBooking = 1;

    public Booking(int userId, int sessionId, LocalDateTime bookingTime) {
        this.bookingId = nextIdBooking ++;
        this.userId = userId;
        this.sessionId = sessionId;
        this.bookingTime = bookingTime;
    }

    public Booking(int userId, int sessionId) {
        this.bookingId = nextIdBooking ++;
        this.userId = userId;
        this.sessionId = sessionId;
    }
    public void confirmBooking(User user){
        if(!confirmed){
            if(user.getIdUser() == userId) {
                confirmed = true;
                System.out.println("Booking confirmed" + getUserId());
            }
        }
        else{
            System.out.println("Booking is already confirmed");
        }
    }
    public void cancelBooking(){
        if(!confirmed){
            System.out.println("Cancel booking");
            // Implement remove the reservation from a database
        }
        else{
            System.out.println("Cannot cancel confirm booking");
        }
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getSessionId() {
        return sessionId;
    }

    public void setSessionId(int sessionId) {
        this.sessionId = sessionId;
    }

    public LocalDateTime getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(LocalDateTime bookingTime) {
        this.bookingTime = bookingTime;
    }
}

