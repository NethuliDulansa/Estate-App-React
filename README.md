**# Property Search**  

**Property Search** is a React-based web application designed to help users browse and search for properties efficiently. This project is built using **Vite** for fast development and optimized builds.  

---

## **Features**  
- **React & Vite**: Utilizes Vite for fast bundling and development.  
- **React Router**: Enables smooth navigation between pages.  
- **Bootstrap & React-Bootstrap**: Provides responsive UI components.  
- **Drag and Drop Support**: Uses `react-beautiful-dnd` and `react-dnd` for interactive elements.  
- **Tabbed Navigation**: Implemented with `react-tabs` for a better user experience.  

---

## **Getting Started**  

### **Prerequisites**  
Ensure you have **Node.js** installed on your system. You can download it from the [Node.js official site](https://nodejs.org/).  

### **Installation**  
1. **Clone this repository:**  
   ```sh
   git clone <repository-url>
   ```  
2. **Navigate to the project directory:**  
   ```sh
   cd property-search
   ```  
3. **Install dependencies:**  
   ```sh
   npm install
   ```  

### **Running the Project**  
To start the development server, run:  
```sh
npm run dev
```  
This will start the **Vite** development server. Open the provided local URL in your browser to view the application.  

---

## **Building for Production**  
To generate an optimized production build, run:  
```sh
npm run build
```  
The output will be available in the **dist** folder.  

---

## **Linting**  
To check for code style issues, run:  
```sh
npm run lint
```  

### **Preview Production Build**  
To preview the production build locally, run:  
```sh
npm run preview
```  

---

## **Project Structure**  
```
property-search/
│-- public/             # Static assets
│-- src/                # Source code
│   ├── components/     # Reusable components
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main application entry point
│-- .gitignore          # Git ignore file
│-- eslint.config.js    # ESLint configuration
│-- index.html          # Main HTML file
│-- package.json        # Project dependencies and scripts
│-- README.md           # Project documentation
│-- vite.config.js      # Vite configuration
```  

---

## **Dependencies**  

### **Main Dependencies**  
- **React** (`react`, `react-dom`) - Core React library  
- **React Router** (`react-router-dom`) - Navigation management  
- **Bootstrap** (`bootstrap`, `react-bootstrap`) - UI framework  
- **Drag and Drop** (`react-dnd`, `react-beautiful-dnd`) - Interactive UI support  
- **React Tabs** (`react-tabs`) - Tabbed navigation  

### **Dev Dependencies**  
- **Vite** - Build tool  
- **ESLint** - Linter for code quality  
- **Type Definitions** (`@types/react`, `@types/react-dom`) - TypeScript support for React  
