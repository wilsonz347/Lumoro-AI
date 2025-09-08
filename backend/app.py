# Flask main app
from flask import Flask
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__)
    CORS(app) 

    # Register blueprints (placeholder)

    return app

if __name__ == "__main__":
    app = create_app()
    port = int(os.getenv("PORT", 5000))  
    app.run(host="0.0.0.0", port=port, debug=True)

