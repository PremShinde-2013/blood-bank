---

# Raktasetu - Blood Bank Management System

Raktasetu is a comprehensive and user-friendly Blood Bank Management System built with Next.js and NextUI. The system aims to streamline the process of blood donation, inventory management, and donor-recipient communication. It is designed to ensure efficiency and transparency in managing blood resources, making it easier for both donors and blood banks to connect.

## Features

- **User Authentication:** Secure login and registration for both donors and blood bank administrators.
- **Donor Management:** Easy management of donor details, including blood group, contact information, and donation history.
- **Inventory Management:** Real-time tracking of blood stock levels, ensuring availability and quick access to required blood types.
- **Request Management:** Automated matching of blood requests with available donors or stock.
- **Notifications:** Email and SMS notifications for donors and administrators regarding donation schedules, blood requests, and more.
- **Responsive Design:** Fully responsive and optimized for various devices, ensuring accessibility and usability.

## Technologies Used

- **Next.js:** A React framework that enables server-side rendering and static site generation.
- **NextUI:** A modern and highly customizable React UI library used for building the user interface.
- **TypeScript:** A typed superset of JavaScript that adds static types, ensuring safer and more robust code.
- **Tailwind CSS:** A utility-first CSS framework for styling the application.
- **MongoDB:** A NoSQL database used for storing user, donor, and inventory data.
- **Node.js & Express:** Backend technologies used for building the server and API endpoints.
- **JWT Authentication:** Secure token-based authentication for users and administrators.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/PremShinde-2013/blood-bank.git
   cd blood-bank
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env.local` file in the root directory and add your environment variables. For example:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

5. **Build for Production:**

   ```bash
   npm run build
   ```

   This will create an optimized production build of your application.

## Usage

- **Admin Panel:** Access the admin panel to manage donors, blood stock, and requests.
- **Donor Registration:** Donors can register, update their profile, and manage their donation history.
- **Request Blood:** Users can request specific blood types and receive notifications when matched with a donor or when stock is available.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any queries or support, please contact:

**Prem Shinde**  
[GitHub Profile](https://github.com/PremShinde-2013)  
[Email](mailto:shindeprem102@gmail.com)

---
