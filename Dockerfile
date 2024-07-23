FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Use shell form to ensure environment variable expansion
CMD ["gunicorn", "--bind", "0.0.0.0:$PORT", "app:app"]
