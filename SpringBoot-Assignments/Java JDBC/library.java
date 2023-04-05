import java.sql.*;

public class library {
	public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;

        try {
//            Class.forName("com.mysql.jdbc.Driver");
          conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/library", "root", "P@sswd02BM");
            stmt = conn.createStatement();

            // Insert a new record into the table
            String sql = "INSERT INTO users (user_id, first_name, last_name, email, password) VALUES (5, 'John', 'Rock', 'john@gmail.com', 'Jr@123')";
            stmt.executeUpdate(sql);

            // Retrieve records from the table
            sql = "SELECT user_id, first_name, last_name, email FROM users";
            ResultSet rs = stmt.executeQuery(sql);

            // Loop through the records and print them to the console
            while (rs.next()) {
                int user_id = rs.getInt("user_id");
                String first_name = rs.getString("first_name");
                String last_name = rs.getString("last_name");
                String email = rs.getString("email");
                String password = rs.getString("password");
                System.out.println("ID: " + user_id + ", Firstname: " + first_name + ", Lastname: " + last_name + ", Email: " + email + ", Password: " + password);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
