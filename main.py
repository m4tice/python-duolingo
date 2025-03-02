"""
author: @GUU8HC
"""

from application import create_app
from application.authentication import auth

if __name__ == "__main__":
    app = create_app()
    app.run()

    # USERNAME = "adminuser"
    # PASSWORD = "adminpwd"
    # print(auth.authenticate(USERNAME, PASSWORD))
