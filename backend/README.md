# Tasks Manager Backend

A robust NestJS backend application for managing tasks with TypeORM and PostgreSQL.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, Delete tasks
- **TypeORM Integration**: Database ORM with PostgreSQL
- **Data Validation**: Request validation using class-validator
- **CORS Support**: Configured for frontend communication
- **TypeScript**: Full TypeScript support with strict typing
- **Error Handling**: Comprehensive error handling and responses

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/items` | Get all tasks |
| GET | `/items/:id` | Get a specific task |
| POST | `/items` | Create a new task |
| PATCH | `/items/:id` | Update a task |
| DELETE | `/items/:id` | Delete a task |

## 🛠️ Tech Stack

- **NestJS**: Progressive Node.js framework
- **TypeORM**: Object-Relational Mapping
- **PostgreSQL**: Primary database
- **class-validator**: Data validation
- **class-transformer**: Data transformation
- **TypeScript**: Type-safe JavaScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up PostgreSQL database**
   - Install PostgreSQL on your system
   - Create a database named `tasks_manager`
   - Update database credentials in the environment variables

4. **Configure environment variables**
   Create a `.env` file in the backend directory:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=your_password
   DB_DATABASE=tasks_manager
   PORT=3001
   NODE_ENV=development
   ```

## 🏃‍♂️ Running the Application

1. **Start the development server**
   ```bash
   npm run start:dev
   ```

2. **The server will be available at**
   ```
   http://localhost:3001
   ```

3. **API endpoints will be available at**
   ```
   http://localhost:3001/items
   ```

## 📊 Database Schema

### Items Table

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL PRIMARY KEY | Auto-incrementing unique identifier |
| title | VARCHAR(255) | Task title (required) |
| description | TEXT | Task description (required) |
| isCompleted | BOOLEAN | Completion status (default: false) |
| createdAt | TIMESTAMP | Creation timestamp (auto-generated) |

## 🔧 Development Commands

```bash
# Start development server with hot reload
npm run start:dev

# Build the application
npm run build

# Start production server
npm run start:prod

# Run tests
npm run test

# Run linting
npm run lint

# Format code
npm run format
```

## 📝 API Usage Examples

### Create a new task
```bash
curl -X POST http://localhost:3001/items \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn NestJS",
    "description": "Complete the NestJS tutorial"
  }'
```

### Get all tasks
```bash
curl http://localhost:3001/items
```

### Update a task
```bash
curl -X PATCH http://localhost:3001/items/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn NestJS Advanced",
    "isCompleted": true
  }'
```

### Delete a task
```bash
curl -X DELETE http://localhost:3001/items/1
```

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── entities/
│   │   └── item.entity.ts          # Database entity
│   ├── dto/
│   │   ├── create-item.dto.ts      # Create request DTO
│   │   └── update-item.dto.ts      # Update request DTO
│   ├── items/
│   │   ├── items.controller.ts     # REST API controller
│   │   ├── items.service.ts        # Business logic
│   │   └── items.module.ts         # Module configuration
│   ├── app.module.ts               # Root application module
│   └── main.ts                     # Application entry point
├── package.json
├── tsconfig.json
└── README.md
```

## 🔒 Security Features

- **Input Validation**: All inputs are validated using DTOs
- **CORS Configuration**: Secure cross-origin resource sharing
- **Error Handling**: Proper error responses without sensitive information
- **Type Safety**: TypeScript ensures type safety throughout the application

## 🚀 Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set production environment variables**
   ```env
   NODE_ENV=production
   DB_HOST=your_production_db_host
   DB_PASSWORD=your_secure_password
   ```

3. **Start the production server**
   ```bash
   npm run start:prod
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Verify database credentials
   - Check if the database exists

2. **Port Already in Use**
   - Change the PORT in environment variables
   - Kill the process using the port: `lsof -ti:3001 | xargs kill -9`

3. **TypeORM Synchronization Issues**
   - Ensure `synchronize: true` is set for development
   - Use migrations for production environments

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [class-validator Documentation](https://github.com/typestack/class-validator)

