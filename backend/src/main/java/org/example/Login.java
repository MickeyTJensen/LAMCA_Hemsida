package org.example;

public class Login {
    private String username;
    private String password;
    User user;

    public Login(String username, String password) {
        this.username = username;
        this.password = password;
    }
    //Method to authenticate a user based on username and password
    public boolean authenticate (String name, String password){
        if(user.getName().equals(name) && user.getPassword().equals(password)){
            return true;
        }
        return false;
    }
    public void logout(){
        System.out.println("Exit");
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
