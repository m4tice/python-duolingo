"""
author: @GUU8HC
"""
#pylint: disable=import-outside-toplevel

from flask import Flask

def create_app():
    """
    create and return a Flask app instance
    """
    app = Flask(__name__)
    app.debug = True

    from .homepage import homepage_bp
    app.register_blueprint(homepage_bp, url_prefix='/homepage')

    return app
