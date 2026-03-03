# FlowUnit: Clarity Without the Chaos ✨

FlowUnit is a modern, responsive landing page and sign-up/verification flow for a task and team management application. It showcases the core features of the FlowUnit platform, designed to help individuals and teams transform project ideas into structured, actionable tasks, ensuring organized planning and efficient execution.

## Features

-   **Intuitive Landing Page**: A beautifully designed, animated landing page built with React and Framer Motion, highlighting key features and benefits.
-   **Smart Generator**: Explains the AI-powered task generation from project descriptions.
-   **Manual Task Creation**: Details the flexibility for users to create and manage tasks manually.
-   **Team Collaboration**: Emphasizes shared workspaces for assigning tasks and tracking ownership.
-   **Progress Clarity**: Visual insights into task statuses, keeping projects on track.
-   **Clean Project Structure**: Promotes organized workflows that scale with project growth.
-   **Secure by Design**: Highlights account and team-based access control for project privacy.
-   **Responsive Design**: Optimized for a seamless experience across all devices.
-   **User Authentication Flow**: Includes a robust sign-up and email verification process.
-   **Legal Pages**: Dedicated sections for Privacy Policy and Terms of Service.

## Usage

FlowUnit provides a comprehensive introduction to its task and team management capabilities.

1.  **Explore the Landing Page**:
    Navigate to the root URL (`/`) to experience the interactive landing page. Here, you can learn about FlowUnit's features, workflow, testimonials, and FAQs.

    ![FlowUnit Dashboard Preview](src/assets/mockup1.png)
    *An overview of the FlowUnit dashboard, demonstrating project clarity and task organization.*

2.  **Sign Up for an Account**:
    Click "Get Started" or navigate to `/get-started`. Fill in your name, username, email, and password to create a new FlowUnit account. The form includes client-side validation using Formik and Yup.

    ![FlowUnit Signup Page](src/assets/mockup4.png)
    *The sign-up interface for new users, designed for a smooth onboarding experience.*

3.  **Verify Your Email**:
    After signing up, you will be redirected to the `/verify-email` page. Enter the 6-digit OTP sent to your registered email address to complete the verification process. You can also resend the OTP if needed.

    ![FlowUnit Email Verification](src/assets/mockup5.png)
    *The email verification screen, featuring an intuitive OTP input field.*

4.  **Legal Information**:
    Access the Privacy Policy (`/legal/privacy-policy`) and Terms of Service (`/legal/terms-of-service`) via the footer links. These pages are dynamically rendered using the `LegalTemplate` component.

## Technologies Used

| Category     | Technology                                                                                                                                                                                                                                                                                              | Description                                                                     |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) <br> ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) <br> ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | A JavaScript library for building user interfaces.                              |
|              | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)                                                                                                                                                                                    | A utility-first CSS framework for rapidly building custom designs.              |
|              | ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)                                                                                                                                                                                    | A production-ready motion library for React.                                    |
| **Form Mgt.**| ![Formik](https://img.shields.io/badge/Formik-263B66?style=for-the-badge&logo=formik&logoColor=white) <br> ![Yup](https://img.shields.io/badge/Yup-71717A?style=for-the-badge&logo=yup&logoColor=white)                                                                                                    | Form builder and validation schema for React.                                   |
| **HTTP Client** | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)                                                                                                                                                                                                        | Promise-based HTTP client for the browser and Node.js.                          |
| **UI/UX**    | ![Sonner](https://img.shields.io/badge/Sonner-B0B0B0?style=for-the-badge&logo=sonner&logoColor=white) <br> ![Lucide React](https://img.shields.io/badge/Lucide_React-000000?style=for-the-badge&logo=lucide&logoColor=white) <br> ![React Icons](https://img.shields.io/badge/React_Icons-E67E22?style=for-the-badge&logo=reacticons&logoColor=white)                                                                                                    | A modern toast library, a beautiful icon set, and a comprehensive icon library. |

## Author Info

Developed with passion and precision.

-   **Your Name**: [LinkedIn](https://linkedin.com/in/your-linkedin-username) | [X (Twitter)](https://x.com/your-twitter-handle)

