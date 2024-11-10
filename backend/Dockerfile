# Base image for Python
FROM python:3.12

# Set the working directory
WORKDIR /app

# Copy the dependencies file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project files
COPY . .

# Run database migrations
RUN python manage.py migrate

# Expose the port the app runs on
EXPOSE 8000

# Run the Django development server (use gunicorn in production)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
