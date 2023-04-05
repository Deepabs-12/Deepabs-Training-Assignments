package net.jdbc.crud;

import java.sql.*;

public class CRUDStatementEg {
	static final String DB_URL = "jdbc:mysql://localhost/mysql_database";
    static final String USER = "your_username";
    static final String PASS = "your_password";

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try {
            // Step 1: Register JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Open a connection
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);

            // Step 3: Create a statement
            System.out.println("Creating statement...");
            stmt = conn.createStatement();

            // Step 4: INSERT operation
            String sql = "INSERT INTO users (name, age) VALUES ('John', 25)";
            int rowsInserted = stmt.executeUpdate(sql);
            System.out.println(rowsInserted + " row(s) inserted.");

            // Step 5: UPDATE operation
            sql = "UPDATE users SET age = 26 WHERE name = 'John'";
            int rowsUpdated = stmt.executeUpdate(sql);
            System.out.println(rowsUpdated + " row(s) updated.");

            // Step 6: SELECT operation
            sql = "SELECT * FROM users WHERE age > 20";
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
            }
            rs.close();

            // Step 7: DELETE operation
            sql = "DELETE FROM users WHERE name = 'John'";
            int rowsDeleted = stmt.executeUpdate(sql);
            System.out.println(rowsDeleted + " row(s) deleted.");

        } catch (SQLException se) {
            // Handle errors for JDBC
            se.printStackTrace();
        } catch (Exception e) {
            // Handle errors for Class.forName
            e.printStackTrace();
        } finally {
            // Step 8: Close resources
            try {
                if (stmt != null) stmt.close();
            } catch (SQLException se2) {
            } // nothing we can do
            try {
                if (conn != null) conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
            System.out.println("Resources closed successfully...");
        }
    }
}
