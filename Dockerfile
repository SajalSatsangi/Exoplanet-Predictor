FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Default port value (can be overridden by environment variable)
ENV PORT 8000

# Use shell form to ensure environment variable expansion
CMD gunicorn --bind 0.0.0.0:${PORT} app:app
