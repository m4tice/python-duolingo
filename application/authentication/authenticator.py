"""
author: @GUU8HC
"""

from application.settings import DEBUG_MODE

class Authenticator:
    """
    User authentication
    """
    def __init__(self, user_db):
        self.user_db = user_db

    def authenticate(self, username, password):
        """
        Authenticate user
        """
        # Query the user_credentials database for the provided credentials
        user = self.user_db.get_user_by_username(username)

        if DEBUG_MODE:
            print(f"[DEBUG] authenticator.py: Found user: {user}")

        if user is None:
            return False

        _, _, user_pwd = user

        return user_pwd == password
