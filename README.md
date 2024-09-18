## Project Documentation: Multi-Step Form

### Overview
This project is a **multi-step form** built with **React, Vite, Tailwind CSS**, and **Framer Motion**. It uses **React Context** for state management, **react-toastify** for notifications, and **Framer Motion** for step transitions. The form consists of three steps: **Personal Information**, **Address Information**, and **Confirmation**, with smooth animations and responsive design.

### Key Features
- **Multi-step navigation**: Allows users to navigate through the form.
- **Form validation**: Includes validation for user input.
- **Responsive design**: Designed to be responsive across devices.
- **Smooth transitions**: Steps change with animations using Framer Motion.
- **State management**: Form data is managed via React Context.
- **Notifications**: Success/error notifications are displayed using React Toastify.

### Technologies Used
- **Vite**: Build tool for frontend development.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for creating interactive transitions.
- **React Toastify**: Library for displaying toast notifications.
- **Context API**: Used for managing the form's global state.

### Project Structure
```bash
multistep-form/
│
├── public/                # Public assets
├── src/
│   ├── assets/            # Image files (e.g., form illustrations)
│   ├── components/        # Reusable components (e.g., Tabs, PersonalInfo, AddressInfo)
│   ├── contextApi/        # Form context for managing global state
│   ├── pages/             # Page components (e.g., MultiStepForm)
│   ├── App.jsx            # Main entry component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global CSS styles
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies and scripts
```

### Installation & Setup
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd multistep-form
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build the project** (optional):
   ```bash
   npm run build
   ```

### Usage
The form allows users to fill out three steps:
1. **Personal Information**: Users enter basic details.
2. **Address Information**: Users enter their address.
3. **Confirmation**: Displays a summary of the entered information.

### Components Breakdown
- **App.jsx**: The root component that renders the `Navbar`, `ToastContainer`, and the `MultiStepFormComponent`.
  
- **MultiStepFormComponent.jsx**: Handles form step navigation and renders the appropriate step (PersonalInfo, AddressInfo, or Confirmation).

- **Tabs.jsx**: Displays the tabbed navigation to indicate the current step.

- **PersonalInfo.jsx**: Collects personal details like name, email, etc.

- **AddressInfo.jsx**: Collects the user's address information.

- **Confirmation.jsx**: Shows a summary of the entered information.

- **NavigationBtn.jsx**: Contains buttons for navigating between form steps and submitting the form.

### State Management
- **FormContext**: The form data and navigation between steps are handled by the `FormContext`. This provides functions like `nextStep()`, `prevStep()`, `setFormData()`, and `submitForm()` to manage the form's behavior.

### Animations
- The form uses **Framer Motion** for smooth transitions between form steps. Each step change is animated with a fade-in/out effect.

### Toast Notifications
- **React Toastify** is integrated for displaying notifications on form submission or errors, providing a better user experience.

### Example Usage
Here is how the multi-step form is initialized and displayed:
```jsx
function App() {
    return (
        <section className="flex items-center justify-center w-full flex-col">
            <ToastContainer />
            <Navbar />
            <MultiStepFormComponent />
        </section>
    );
}

export default App;
```

### Scripts
- **dev**: Runs the development server.
- **build**: Builds the project for production.
- **preview**: Previews the built project.
- **test**: Runs the tests using `vitest`.

### Dependencies

- `framer-motion`: For handling animations.
- `react-toastify`: To display toast notifications.
- `tailwindcss` and `daisyui`: For styling.

### Future Improvements
- **Form validation**: Additional validation logic can be added to ensure data integrity.
- **Backend integration**: The form data can be posted to an API.
- **Error handling**: Implement better error handling during form submission.

### Conclusion
This multi-step form project demonstrates how to create a user-friendly form experience with transitions, state management, and responsive design. The use of modern libraries such as Framer Motion and Tailwind CSS makes it easy to maintain and extend in the future.
