# Tasks Manager Frontend

A modern Next.js frontend application for the Tasks Manager with beautiful UI and responsive design.

## 🎨 Features

- **Modern UI**: Clean and intuitive interface built with Tailwind CSS
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Updates**: Optimistic updates for better user experience
- **Form Validation**: Client-side validation with error handling
- **TypeScript**: Full type safety throughout the application
- **App Router**: Next.js 14 App Router for modern routing

## 🖥️ Pages

- **Home (`/`)**: Display all tasks with statistics and management options
- **Create (`/create`)**: Form to add new tasks
- **Edit (`/edit/[id]`)**: Form to edit existing tasks

## 🛠️ Tech Stack

- **Next.js 14**: React framework with App Router
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API communication

## 📦 Installation

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the frontend directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

## 🏃‍♂️ Running the Application

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🎯 Key Features Explained

### Task Management

- **Create Tasks**: Add new tasks with title and description
- **View Tasks**: See all tasks in a organized table format
- **Edit Tasks**: Modify existing task details and completion status
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Toggle Completion**: Quick checkbox to mark tasks as completed

### User Experience

- **Loading States**: Visual feedback during API operations
- **Error Handling**: Clear error messages for failed operations
- **Form Validation**: Real-time validation with helpful error messages
- **Responsive Design**: Optimized for all screen sizes
- **Intuitive Navigation**: Easy navigation between pages

## 🎨 UI Components

### Design System

- **Color Palette**: Consistent color scheme with primary, success, and danger colors
- **Typography**: Clean and readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Shadows**: Subtle shadows for depth and visual hierarchy

### Interactive Elements

- **Buttons**: Multiple button styles for different actions
- **Forms**: Styled form inputs with validation states
- **Tables**: Responsive tables with hover effects
- **Cards**: Clean card layouts for content organization

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-featured experience with all functionality
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface with stacked layouts

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 📊 Task Statistics

The home page displays helpful statistics:

- **Total Tasks**: Count of all tasks
- **Completed Tasks**: Number of finished tasks
- **Pending Tasks**: Number of incomplete tasks

## 🎯 Form Features

### Create Task Form

- **Title Input**: Required field with character limits
- **Description Input**: Multi-line textarea for detailed descriptions
- **Validation**: Real-time validation with error messages
- **Reset Function**: Clear form and start over

### Edit Task Form

- **Pre-populated Fields**: Loads existing task data
- **Completion Toggle**: Checkbox to mark as completed
- **Selective Updates**: Only sends changed fields to the API
- **Reset to Original**: Restore original values

## 🔄 API Integration

### Service Layer

- **TaskApiService**: Centralized API communication
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Visual feedback during API operations
- **Type Safety**: Full TypeScript support for API responses

### API Methods

- `getAllTasks()`: Fetch all tasks
- `getTaskById(id)`: Get specific task
- `createTask(data)`: Create new task
- `updateTask(id, data)`: Update existing task
- `deleteTask(id)`: Delete task
- `toggleTaskCompletion(id, status)`: Toggle completion status

## 🎨 Styling Architecture

### Tailwind CSS Configuration

- **Custom Colors**: Brand colors for primary, success, and danger states
- **Component Classes**: Reusable component styles
- **Utility Classes**: Single-purpose utility classes
- **Responsive Breakpoints**: Mobile-first responsive design

### CSS Architecture

```css
@layer base {
  /* Global base styles */
}

@layer components {
  /* Reusable component styles */
  .btn,
  .form-input,
  .card,
  .table;
}

@layer utilities {
  /* Single-purpose utilities */
}
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── create/
│   │   │   └── page.tsx            # Create task page
│   │   ├── edit/
│   │   │   └── [id]/
│   │   │       └── page.tsx        # Edit task page
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Home page
│   ├── services/
│   │   └── api.ts                  # API service layer
│   └── types/
│       └── task.ts                 # TypeScript interfaces
├── public/                         # Static assets
├── package.json
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md
```

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Optimized images with Next.js Image component
- **Bundle Analysis**: Built-in bundle analyzer
- **Lazy Loading**: Components loaded as needed

## 🔒 Type Safety

### TypeScript Interfaces

- **Task**: Complete task object structure
- **CreateTaskDto**: Data structure for creating tasks
- **UpdateTaskDto**: Data structure for updating tasks
- **ApiResponse**: Standardized API response format

### Type Guards

- Runtime type checking for API responses
- Validation of user input data
- Error handling with proper typing

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Error**

   - Ensure backend server is running on port 3001
   - Check NEXT_PUBLIC_API_URL environment variable
   - Verify CORS configuration in backend

2. **Build Errors**

   - Clear Next.js cache: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`
   - Check TypeScript errors: `npm run lint`

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check if PostCSS is installed
   - Verify globals.css imports

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

