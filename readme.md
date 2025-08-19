```

I have Done this bellow Component's data render from backend like mongodb using backend nodejs and expressjs ,it will render from backend and show it to my frondend projrct,

```

```

RenderCustomizedLabel - done as BarChartData.js
SimpleAreaChart - done as AreaChartData.js
CategoryPieChart - done as ExpenseStats.js
RenderLabel - done as transExpenseStats.js
RecentTransactions - done as TransactionTableData.js
InvestmentChart - done as InvestmentChartData.js
DebitCreditOverview - DebitCreditOverviewData.js

```

````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
Project
````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

# Full-Stack Bank Dashboard

A responsive, data-driven banking dashboard built with a full-stack JavaScript architecture, featuring Node.js, Express, MongoDB for the backend and modern frontend data visualizations.

---

##  Live Demo

Experience the live version here: [BankDash Live](skbankdash32.netlify.app)

---

##  Overview

This project delivers a complete banking dashboard solution with real-time data display, including analytics, transaction history, and visual financial insights. It demonstrates:

- Full-stack integration with a RESTful API
- Dynamic data rendering from a MongoDB backend
- Rich, responsive front-end charts and tables

---

##  Key Components Rendered from Backend

The following frontend components retrieve and display data via the backend API:

- **RenderCustomizedLabel** – renders bar chart data (`BarChartData.js`)
- **SimpleAreaChart** – renders area chart data (`AreaChartData.js`)
- **CategoryPieChart** – renders expense breakdown (`ExpenseStats.js`)
- **RenderLabel** – renders transactional stats (`transExpenseStats.js`)
- **RecentTransactions** – displays recent transaction history (`TransactionTableData.js`)
- **InvestmentChart** – visualizes investment trends (`InvestmentChartData.js`)
- **DebitCreditOverview** – provides overview of debit vs credit (`DebitCreditOverviewData.js`)

---

##  Tech Stack

| Layer           | Technology               | Purpose                                   |
|----------------|---------------------------|--------------------------------------------|
| **Backend**     | Node.js & Express.js      | Server, API endpoints, and request handling |
|                 | MongoDB                   | Persistent data storage                     |
| **Frontend**    | React.js (or similar)     | Dynamic UI and component-based rendering    |
|                 | Charting Libraries        | Visualized data via bar/area/pie charts     |
| **Deployment**  | Vercel                    | Hosting for the frontend and backend        |

---

##  Installation & Local Setup

Here’s how to run the app locally:

```bash
# Clone the repository
git clone https://github.com/Sarfaraj32/Full-Stack-BankDash-Project.git
cd Full-Stack-BankDash-Project

# Navigate to backend, install dependencies, and start server
cd Backend
npm install
npm run start

# In a separate terminal, navigate to frontend, install and start
cd ../Frontend
npm install
npm run dev
