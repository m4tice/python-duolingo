"""
author: @GUU8HC
"""

from application.database import user_db
from .authenticator import Authenticator

auth = Authenticator(user_db)
