# Car Leasing Calculator

## Overview

This project is a responsive and user-friendly web-based calculator designed to assist users in estimating the cost of leasing a car. It allows users to input various parameters such as car type, car value, lease period, and down payment to calculate monthly installments and display detailed leasing cost breakdowns.

### Features

- **User Inputs:**
  - Car Type: Choose between "Brand New" and "Used" cars using a dropdown list.
  - Car Value: Input field and range slider to select the car's value (€10,000 - €200,000).
  - Lease Period: Selectable from 12 to 60 months in 12-month increments.
  - Down Payment: Range slider to select a down payment between 10% and 50% of the car's value, with a step of 5%.

- **Functionality:**
  - Dynamically calculates the monthly installment based on user inputs.
  - Displays leasing cost components including total leasing cost, down payment amount, monthly installment, and interest rate.
  - Implements validation to prevent invalid user inputs.

- **Design:**
  - Clean and professional UI design using HTML and CSS.
  - Organized form elements for easy input and interaction.
  - Responsive design to ensure compatibility across various screen sizes and devices.

### Business Rules

- **Interest Rates:**
  - Brand New Cars: 2.99% annual interest rate.
  - Used Cars: 3.7% annual interest rate.

### Result Display

- Leasing cost components are displayed below the form in two columns:
  - Left Column:
    - Total Leasing Cost
    - Down Payment (Amount and Percentage)
  - Right Column:
    - Monthly Installment
    - Interest Rate

### How to Use

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser.
3. Fill out the form with valid inputs.
4. See the calculated results update dynamically as you change input values.

### Screenshots

#### Desktop

![car-leasing-desktop](https://github.com/linimary/car-leasing-calculator/assets/125043957/cd789331-e192-45d8-b208-c5c08bf0cd7f)

#### Mobile
![car-leasing-mobile](https://github.com/linimary/car-leasing-calculator/assets/125043957/888f29b8-eea2-4406-aed8-a5553ff3da25)

### Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
